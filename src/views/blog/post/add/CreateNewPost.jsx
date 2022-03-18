import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import Switch from '@mui/material/Switch';
import { Divider, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

import TextEditorComponent from './TextEditor';
import backIcon from 'img/icons/arrows/arr063.svg';
import saveIcon from 'img/icons/arrows/arr085.svg';
import TextField from '@mui/material/TextField';

import { fetchPostCategories } from 'actions/post/postCategoryActions';
import { fetchPublishStatus } from 'actions/post/publishStatusActions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default function CreateNewPost() {
  const dispatch = useDispatch();
  const router = useHistory();

  const [category_id, setCategory_id] = useState('');
  const [publish_id, setPublish_id] = useState('');
  const [active, setActive] = useState(true);
  const [comment_status, setComment_status] = useState(true);
  const [post_name, setPost_name] = useState('');
  const [slug, setSlug] = useState('');
  const [postData, setPostData] = useState('');

  const { postCagetories, PostpublishStatus } = useSelector(
    (state) => ({
      postCagetories: state.post.postCategory.postCategories,
      PostpublishStatus: state.post.publish.PostpublishStatus,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (category_id === '') {
      dispatch(fetchPostCategories());
      setCategory_id('1');
    }
    if (publish_id === '') {
      dispatch(fetchPublishStatus());
      setPublish_id('1');
    }
  }, [category_id, publish_id]);
  console.log(postCagetories)

  const backToPostLists = () => {
    history.push(`/post/all`);
  };

  const goNewPostPage = () => {
    history.push(`/post/new`);
  };
  return (
    <>
      {/* Begin Form */}
      <form onSubmit=''>
        <div className='flex flex-col items-center gap-4 w-full'>
          {/* Begin Top Toolbar */}
          <div className='bg-white dark:bg-[#1e1e2d] animation-all duration-300 w-full rounded-lg  shadow-md'>
            <div className='p-5 flex md:justify-between items-center md:flex-row gap-3 flex-col sm:justify-center'>
              <h2 className='font-normal text-sm text-gray-800 dark:text-white'>
                ایجاد مقاله جدید
              </h2>
              <div className='flex justify-between items-center'>
                <button
                  onClick={goNewPostPage}
                  className='bg-primary mx-2 px-3 py-2 rounded-[0.475rem] text-white hover:shadow-lg hover:bg-sky-500 transition-all duration-300 flex justify-between  items-center'
                >
                  <span className='text-sm text-light fw-light'>ذخیره</span>
                  <span className='svg-icon svg-icon-3 svg-icon-white mx-2'>
                    <SVG src={saveIcon} />
                  </span>
                </button>
                <button
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
                name='post_name'
                label='عنوان مقاله'
                placeholder='عنوان مقاله را وارد کنید'
                helperText='عنوان مقاله در سایت نمایش داده خواهد شد'
                margin='normal'
                variant='outlined'
                className='w-full'
              />
              {/* End Post Title */}

              <div className='w-full'>
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
                  <Switch aria-label='فعال' defaultChecked />
                </div>
                {/* End Enable Post */}
                {/* Begin COmmenting fo Post */}
                <div className='w-full flex justify-between items-center'>
                  <span className='text-slate-600 dark:text-white font-normal text-sm'>
                    امکان نظر دادن به مقاله
                  </span>
                  <Switch aria-label='فعال' defaultChecked />
                </div>
                {/* End COmmenting fo Post */}
                 {/* Begin post status */}
                 <div className='w-full my-2'>
                  <FormControl variant='outlined' className='w-full'>
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
                </div>
                {/* End post status */}

                {/* Begin Post Category */}
                <div className='w-full my-2'>
                  <FormControl variant='outlined' className='w-full '>
                    <InputLabel>دسته مقاله</InputLabel>
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
                </div>
                {/* End Post Category */}

                {/* Begin Post Link */}
                <div className='w-full my-2'>
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
