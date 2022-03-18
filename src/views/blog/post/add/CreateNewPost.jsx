import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import Switch from '@mui/material/Switch';
import InfoIcon from '@mui/icons-material/Info';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormattedMessage } from 'react-intl';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import TextEditorComponent from './TextEditor';
import backIcon from 'img/icons/arrows/arr063.svg';
import saveIcon from 'img/icons/arrows/arr085.svg';

import { fetchPostCategories } from 'actions/post/postCategoryActions';
import { fetchPublishStatus } from 'actions/post/publishStatusActions';
import { createPost } from 'actions/post/postActions';
import PostStatusToaster from './PostStatusToaster';

const postSchema = Yup.object().shape({
  post_name: Yup.string()
    .min(3, <FormattedMessage id='AUTH_LOGIN_EMAIL_MIN' />)
    .max(50, <FormattedMessage id='AUTH_LOGIN_EMAIL_MAX' />)
    .required(<FormattedMessage id='AUTH_LOGIN_EMAIL_REQUIRE' />),
});

export default function CreateNewPost() {
  const dispatch = useDispatch();
  const router = useHistory();

  const [loading, setLoading] = useState(false);
  const [category_id, setCategory_id] = useState('');
  const [publish_id, setPublish_id] = useState('');
  const [active, setActive] = useState(true);
  const [comment_status, setComment_status] = useState(true);
  const [post_name, setPost_name] = useState('');
  const [slug, setSlug] = useState('');
  const [postData, setPostData] = useState('');

  const { postCagetories, PostpublishStatus, postStoreSucc } = useSelector(
    (state) => ({
      postCagetories: state.post.postCategory.postCategories,
      PostpublishStatus: state.post.publish.PostpublishStatus,
      postStoreSucc: state.post.post.postStoreSucc,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (postStoreSucc === true) {
      setLoading(false);
    }
    if (category_id === '') {
      dispatch(fetchPostCategories());
      setCategory_id('1');
    }
    if (publish_id === '') {
      dispatch(fetchPublishStatus());
      setPublish_id('1');
    }
  }, [category_id, publish_id,postStoreSucc]);

  const backToPostLists = () => {
    router.push(`/post/all`);
  };

  const goNewPostPage = () => {
    history.push(`/post/new`);
  };

  const initialValues = {
    post_name: post_name,
    category_id: category_id,
    publish_id: publish_id,
    slug: slug,
    active: active,
    post_content: localStorage.getItem('postData'),
    comment_status: comment_status,
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: postSchema,
    onSubmit: (values) => {
      setLoading(true);
      dispatch(createPost(values));
    },
  });
  return (
    <>
      {/* Begin Success Toaster */}
      <PostStatusToaster />
      {/* End Success Toaster */}
      {/* Begin Form */}
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col items-center gap-4 w-full'>
          {/* Begin Top Toolbar */}
          <div className='bg-white dark:bg-[#1e1e2d] animation-all duration-300 w-full rounded-lg  shadow-md'>
            <div className='p-5 flex md:justify-between items-center md:flex-row gap-3 flex-col sm:justify-center'>
              <h2 className='font-normal text-sm text-gray-800 dark:text-white'>
                ایجاد مقاله جدید
              </h2>
              <div className='flex justify-between items-center'>
                <button
                  disabled={loading}
                  type='submit'
                  className='bg-primary mx-2 px-3 py-2 rounded-[0.475rem] text-white hover:shadow-lg hover:bg-sky-500 transition-all duration-300 flex justify-between  items-center'
                >
                  {loading === true ? (
                    <>
                      <span className='text-sm text-light fw-light mx-1'>در حال ذخیره ...</span>
                      <CircularProgress size={20} className='text-white' color='inherit' />
                    </>
                  ) : (
                    <>
                      <span className='text-sm text-light fw-light'>ذخیره</span>
                      <span className='svg-icon svg-icon-3 svg-icon-white mx-2'>
                        <SVG src={saveIcon} />
                      </span>
                    </>
                  )}
                </button>
                <button
                  disabled={loading}
                  onClick={backToPostLists}
                  className='bg-primary mx-2 px-3 py-2 rounded-[0.475rem] text-white hover:shadow-lg hover:bg-sky-500 transition-all duration-300 flex justify-between  items-center'
                >
                  <span className='text-sm text-light fw-light'>بازگشت به لیست مقالات</span>
                  <span className='svg-icon svg-icon-3 svg-icon-white mx-2'>
                    <SVG src={backIcon} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* End Top Toolbar */}

          {/* Begin Content Form */}
          <div className='grid grid-cols-12 gap-3'>
            {/* Begin Content */}
            <div className=' col-span-8    bg-white dark:bg-[#1e1e2d] animation-all duration-300  rounded-lg  shadow-md p-5'>
              {/* Begin Post Title */}
              <TextField
                required
                id='post_name'
                disabled={loading}
                label='عنوان مقاله'
                placeholder='عنوان مقاله را وارد کنید'
                helperText='عنوان مقاله همان تیتر مقاله می باشد که در سایت نمایش داده می شود'
                margin='normal'
                variant='outlined'
                className='w-full'
                onChange={(e) => setPost_name(e.target.value)}
              />
              {/* End Post Title */}
              {formik.errors.post_name && (
                <div className='text-right text-danger font-normal text-sm my-1 '>
                  <InfoIcon fontSize='small' />
                  <span className='mx-2 font-bold'>{formik.errors.post_name}</span>
                </div>
              )}

              <div className='w-full my-2'>
                <div className='border dark:border-slate-500 rounded-lg p-2'>
                  <TextEditorComponent />
                </div>
              </div>
            </div>
            {/* End Content */}

            {/* Begin Aside */}
            <div className=' col-span-4 gap-3  bg-white dark:bg-[#1e1e2d] animation-all duration-300 rounded-lg  shadow-md p-5'>
              {/* Begin Aside Wrapper */}
              <div className='flex flex-col  items-center justify-center gap-4'>
                {/* Begin Enable Post */}
                <div className='w-full flex justify-between items-center'>
                  <span className='text-slate-600 dark:text-white font-normal text-sm'>
                    مقاله فعال باشد؟
                  </span>
                  <Switch
                    disabled={loading}
                    aria-label='فعال'
                    onChange={(e) => setActive(e.target.checked)}
                    defaultChecked
                  />
                </div>
                {/* End Enable Post */}
                {/* Begin COmmenting fo Post */}
                <div className='w-full flex justify-between items-center'>
                  <span className='text-slate-600 dark:text-white font-normal text-sm'>
                    امکان نظر دادن به مقاله
                  </span>
                  <Switch
                    disabled={loading}
                    aria-label='فعال'
                    onChange={(e) => setComment_status(e.target.checked)}
                    defaultChecked
                  />
                </div>
                {/* End COmmenting fo Post */}
                {/* Begin post status */}
                <div className='w-full my-2'>
                  <FormControl variant='outlined' className='w-full'>
                    <InputLabel id='demo-simple-select-outlined-label'>وضعیت انتشار</InputLabel>
                    <Select
                      disabled={loading}
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
                </div>
                {/* End post status */}

                {/* Begin Post Category */}
                <div className='w-full my-2'>
                  <FormControl variant='outlined' className='w-full '>
                    <InputLabel>دسته مقاله</InputLabel>
                    <Select
                      disabled={loading}
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
                </div>
                {/* End Post Category */}

                {/* Begin Post Link */}
                <div className='w-full my-2'>
                  <TextField
                    disabled={loading}
                    id='slug'
                    name='slug'
                    label='لینک مقاله'
                    placeholder='برای مقاله میتوانید لینک دلخواه داشته باشید'
                    helperText='در صورت وارد نکردن لینک ، به صورت خودکار از نام مقاله استفاده می شود'
                    margin='normal'
                    variant='outlined'
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
                {/* End Post Link */}
              </div>
              {/* End Aside Wrapper */}
            </div>
            {/* End Aside */}
          </div>
          {/* End Conten Form */}
        </div>{' '}
      </form>
      {/* End Form */}
    </>
  );
}
