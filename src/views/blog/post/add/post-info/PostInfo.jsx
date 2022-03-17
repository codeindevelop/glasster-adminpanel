import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import CKEditor from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import DecoupledcEditor from '@ckeditor/ckeditor5-build-decoupled-document'

import Crud from 'cruds'
import {fetchPostCategories} from 'actions/post/postCategoryActions'
import {fetchPublishStatus} from 'actions/post/publishStatusActions'
import {storePostInfoData} from 'actions/post/postActions'
import {Divider, FormControl, FormHelperText, InputLabel, MenuItem, Select} from '@mui/material'
import {uploadFileAction} from 'actions/media/mediaActions'

export default function PostInfo({className}) {
  const dispatch = useDispatch()

  const [category_id, setCategory_id] = useState('')
  const [publish_id, setPublish_id] = useState('')
  const [active, setActive] = useState(true)
  const [comment_status, setComment_status] = useState(true)
  const [post_name, setPost_name] = useState('')
  const [slug, setSlug] = useState('')
  const [postData, setPostData] = useState('')
  const [meta_tags, setMeta_tags] = useState('')
  const [post_password, setPost_password] = useState('')

  const {postCagetories, PostpublishStatus} = useSelector(
    (state) => ({
      postCagetories: state.post.postCategory.postCategories,
      PostpublishStatus: state.post.publish.PostpublishStatus,
    }),
    shallowEqual
  )

  console.log(publish_id)
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then((file) => {
            let formData = new FormData()
            formData.append('files[]', file)

            // Get token from localstorage
            const token = localStorage.getItem('token')

            // Headers
            const config = {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${token}`,
              },
            }
            axios
              .post(Crud.uploadFileURL, formData, config)
              .then((res) => {
                resolve({
                  default: `${Crud.APIURL}/assets/uploads/${res.data.filename}`,
                })
                dispatch({
                  type: 'UPLOAD_FILE_SUCC',
                  payload: res.data,
                })
              })
              .catch((err) => {
                dispatch({
                  type: 'UPLOAD_FILE_ERR',
                  payload: err.data,
                })
                reject(err)
              })
          })
        })
      },
    }
  }
  function uploadPlugin(postData) {
    postData.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader)
    }
  }

  const editorConfiguration = {
    extraPlugins: [uploadPlugin],
    fontFamily: {
      options: [
        'default',
        'pelak',
        'Anjoman',
        'iranyekan',
        'webKalameh',
        'iransans',
        'dana',
        'yekanbakh',
      ],
    },
    fontSize: {
      options: [9, 11, 13, 'default', 17, 19, 21],
    },
    heading: {
      options: [
        {
          model: 'paragraph',
          title: 'پاراگراف',
          class: 'ck-heading_paragraph',
        },
        {
          model: 'heading1',
          view: 'h1',
          title: 'هدینگ 1',
          class: 'ck-heading_heading1',
        },
        {
          model: 'heading2',
          view: 'h2',
          title: 'هدینگ 2',
          class: 'ck-heading_heading2',
        },
      ],
    },
    toolbarLocation: 'top',

    language: {
      // The UI will be English.
      ui: 'en',

      // But the content will be edited in Arabic.
      content: 'ar',
    },
  }

  useEffect(() => {
    if (category_id === '') {
      dispatch(fetchPostCategories())
      setCategory_id('1')
    }
    if (publish_id === '') {
      dispatch(fetchPublishStatus())
      setPublish_id('2')
    }

    // Fetch post category data

    const post_content = postData.data

    const body = {
      category_id,
      publish_id,
      post_name,
      slug,
      active,
      comment_status,
      post_content,
      meta_tags,
      post_password,
    }

    dispatch(storePostInfoData(body))
  }, [
    dispatch,
    active,
    comment_status,
    category_id,
    publish_id,
    post_name,
    slug,
    postData,
    meta_tags,
    post_password,
  ])
  return (
    <>
      <div className='row'>
        {/* Begin Post Text Editor and Title */}
        <div className='col-lg-6 col-xxl-8'>
          <div className='card-stretch card-stretch-half gutter-b'>
            <div className={`card card-custom  ${className}`}>
              <div className='card-body'>
                <TextField
                  required
                  id='post_name'
                  name='post_name'
                  label='عنوان مقاله'
                  placeholder='عنوان مقاله را وارد کنید'
                  helperText='عنوان مقاله در سایت نمایش داده خواهد شد'
                  margin='normal'
                  variant='outlined'
                  className='w-100'
                  onChange={(e) => setPost_name(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='card-stretch card-stretch-half my-2 gutter-b'>
            <div className={`card card-custom  ${className}`}>
              <div className='card-body'>
                <CKEditor
                  editor={DecoupledcEditor}
                  data=''
                  className='ck-rtl'
                  config={editorConfiguration}
                  onInit={(editor) => {
                    console.log('Editor is ready to use!')
                    console.log(editor.ui.getEditableElement())
                    editor.ui
                      .getEditableElement()
                      .parentElement.append(editor.ui.view.toolbar.element)
                  }}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    editor.editing.view.change((writer) => {
                      writer.setStyle(
                        'height',
                        '400px',

                        editor.editing.view.document.getRoot()
                      )
                    })
                  }}
                  // onChange={(event, editor) => {
                  //   setPostData(editor.getData())
                  // }}
                  onChange={(event, editor) => {
                    const data = editor.getData()

                    setPostData({data})
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* End Post Text Editor and Title */}

        {/* Begin Aside */}
        <div className='col-lg-6 col-xxl-4'>
          {/* Begin Card */}

          <div className={`card card-custom card-stretch gutter-b ${className}`}>
            <div className='card-body'>
              <TextField
                required
                id='slug'
                name='slug'
                label='لینک مقاله'
                placeholder='برای مقاله میتوانید لینک دلخواه داشته باشید'
                helperText='در صورت وارد نکردن لینک ، به صورت خودکار از نام مقاله استفاده می شود'
                margin='normal'
                variant='outlined'
                onChange={(e) => setSlug(e.target.value)}
              />
              <Divider className='mt-1 mb-4' />
              <FormControl variant='outlined' className='w-100 mb-5'>
                <InputLabel id='demo-simple-select-outlined-label'>دسته مقاله</InputLabel>
                <Select
                  id='category_id'
                  // onClick={handleFetchCategory}
                  value={category_id}
                  onChange={(e) => setCategory_id(e.target.value)}
                >
                  {postCagetories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.category_name === 'uncategorized' ? (
                        <span>بدون دسته</span>
                      ) : (
                        <>{category.category_name} </>
                      )}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>برای مقاله فوق یک دسته انتخاب کنید </FormHelperText>
              </FormControl>

              <FormControl variant='outlined' className='w-100 mb-5'>
                <InputLabel id='demo-simple-select-outlined-label'>وضعیت انتشار</InputLabel>
                <Select
                  value={publish_id}
                  label='وضعیت انتشار'
                  onChange={(e) => setPublish_id(e.target.value)}
                >
                  {PostpublishStatus.map((status) => (
                    <MenuItem key={status.id} value={status.id}>
                      {status.mode === 'published' ? <span>منتشر شده</span> : null}
                      {status.mode === 'draft' ? <span>منتشر نشده</span> : null}
                      {status.mode === 'archive' ? <span>بایگانی شده</span> : null}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>وضعیت انتشار مقاله در سایت را مشخص کنید</FormHelperText>
              </FormControl>

              <Divider className='my-2 mb-5' />
              {/* Begin Post Active */}
              <FormControl variant='outlined' className='w-100 mb-5'>
                <InputLabel id='demo-simple-select-outlined-label'>مقاله فعال باشد ؟</InputLabel>
                <Select
                  value={active}
                  label='انتخاب وضعیت مقاله'
                  onChange={(e) => setActive(e.target.value)}
                >
                  <MenuItem value={true}>فعال باشد</MenuItem>
                  <MenuItem value={false}>غیر فعال باشد</MenuItem>
                </Select>
                <FormHelperText>مشخص کنید که بعد از ذخیره ، آیا مقاله فعال باشد ؟</FormHelperText>
              </FormControl>
              {/* END Post Active */}
              {/* Begin Post Comment */}
              <FormControl variant='outlined' className='w-100 mb-5'>
                <InputLabel id='demo-simple-select-outlined-label'>امکان نظر دادن</InputLabel>
                <Select
                  value={comment_status}
                  label='انتخاب کنید'
                  onChange={(e) => setComment_status(e.target.value)}
                >
                  <MenuItem value={true}>قابل نظر دادن</MenuItem>
                  <MenuItem value={false}>غیر قابل نظر دادن</MenuItem>
                </Select>
                <FormHelperText>
                  انتخاب کنید که کاربران بتوانند به این مقاله نظر دهند یا خیر
                </FormHelperText>
              </FormControl>
              {/* END Post Comment */}
              <Divider className='mt-1 mb-1' />

              <TextField
                required
                multiline
                className='w-100'
                rows={4}
                label='تگ ها'
                placeholder='تگ های خود را وارد کنید'
                helperText='لطفا تگ ها را با , از هم جدا کنید'
                margin='normal'
                variant='outlined'
                onChange={(e) => setMeta_tags(e.target.value)}
              />

              <Divider className='mt-1 mb-1' />

              <TextField
                id='password'
                name='password'
                className='w-100'
                label='رمز عبور مقاله'
                placeholder='رمز عبور خود را وارد کنید'
                helperText='با قرار دادن رمز عبور امکان مشاهده مقاله را محدود تر کنید'
                margin='normal'
                type='password'
                variant='outlined'
                onChange={(e) => setPost_password(e.target.value)}
              />
            </div>
          </div>

          {/* END Card */}
        </div>
        {/* END Aside */}
      </div>
    </>
  )
}
