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
  }, [category_id, publish_id, postStoreSucc]);

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
                <FormattedMessage id='POST_CREATE_POST' />
              </h2>
              <div className='flex justify-between items-center'>
                <button
                  disabled={loading}
                  type='submit'
                  className='bg-primary mx-2 px-3 py-2 rounded-[0.475rem] text-white hover:shadow-lg hover:bg-sky-500 transition-all duration-300 flex justify-between  items-center'
                >
                  {loading === true ? (
                    <>
                      <span className='text-sm text-light fw-light mx-1'>
                        <FormattedMessage id='POST_SAVEPROCESS_POST' />
                      </span>
                      <CircularProgress size={20} className='text-white' color='inherit' />
                    </>
                  ) : (
                    <>
                      <span className='text-sm text-light fw-light'>
                        <FormattedMessage id='POST_SAVE_POST' />
                      </span>
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
                  <span className='text-sm text-light fw-light'>
                    <FormattedMessage id='POST_BACK_TO_POSTLISTS' />
                  </span>
                  <span className='svg-icon svg-icon-3 svg-icon-white mx-2'>
                    <SVG src={backIcon} />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* End Top Toolbar */}

          {/* Begin Content Form */}
          <div className='flex w-full lg:flex-row flex-col gap-3'>
            {/* Begin Content */}
            <div className='  lg:w-[70%] sm:w-full    bg-white dark:bg-[#1e1e2d] animation-all duration-300  rounded-lg  shadow-md p-5'>
              {/* Begin Post Title */}
              <TextField
                required
                id='post_name'
                disabled={loading}
                label={<FormattedMessage id='POST_POSTNAME_LABLE' />}
                placeholder={<FormattedMessage id='POST_POSTNAME_PLACEHOLDER' />}
                helperText={<FormattedMessage id='POST_POSTNAME_HELPERTEXT' />}
                margin='normal'
                variant='outlined'
                className='w-full'
                onChange={(e) => setPost_name(e.target.value)}
              />



              <div className='w-full my-2'>
                <div className='border dark:border-slate-500 rounded-lg p-2'>
                  <TextEditorComponent />
                </div>
              </div>
            </div>
            {/* End Content */}

            {/* Begin Aside */}
            <div className=' lg:w-[30%] sm:w-full  bg-white dark:bg-[#1e1e2d] animation-all duration-300 rounded-lg  shadow-md p-5'>
              {/* Begin Aside Wrapper */}
              <div className='flex flex-col  items-center justify-center gap-4'>
                {/* Begin Enable Post */}
                <div className='w-full flex justify-between items-center'>
                  <span className='text-slate-600 dark:text-white font-normal text-sm'>
                    <FormattedMessage id='POST_POST_HAS_ENABLE' />
                  </span>
                  <Switch
                    disabled={loading}
                    aria-label={<FormattedMessage id='POST_POST_LABLE_ENABLE' />}
                    onChange={(e) => setActive(e.target.checked)}
                    defaultChecked
                  />
                </div>
                {/* End Enable Post */}
                {/* Begin COmmenting fo Post */}
                <div className='w-full flex justify-between items-center'>
                  <span className='text-slate-600 dark:text-white font-normal text-sm'>
                    <FormattedMessage id='POST_POST_HAS_COMMENTED' />
                  </span>
                  <Switch
                    disabled={loading}
                    aria-label={<FormattedMessage id='POST_POST_LABLE_ENABLE' />}
                    onChange={(e) => setComment_status(e.target.checked)}
                    defaultChecked
                  />
                </div>
                {/* End COmmenting fo Post */}
                {/* Begin post status */}
                <div className='w-full my-2'>
                  <FormControl variant='outlined' className='w-full'>
                    <InputLabel id='demo-simple-select-outlined-label'>
                      <FormattedMessage id='POST_POST_STATUS' />
                    </InputLabel>
                    <Select
                      disabled={loading}
                      value={publish_id}
                      label={<FormattedMessage id='POST_POST_STATUS' />}
                      onChange={(e) => setPublish_id(e.target.value)}
                    >
                      {PostpublishStatus.map((status) => (
                        <MenuItem key={status.id} value={status.id}>
                          {status.mode === 'published' ? (
                            <span>
                              <FormattedMessage id='POST_STATUS_PUBLISH' />
                            </span>
                          ) : null}
                          {status.mode === 'draft' ? (
                            <span>
                              <FormattedMessage id='POST_STATUS_DRAFT' />
                            </span>
                          ) : null}
                          {status.mode === 'archive' ? (
                            <span>
                              <FormattedMessage id='POST_STATUS_ARCHIVE' />
                            </span>
                          ) : null}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>
                      <FormattedMessage id='POST_STATUS_HELPERTXT' />
                    </FormHelperText>
                  </FormControl>
                </div>
                {/* End post status */}

                {/* Begin Post Category */}
                <div className='w-full my-2'>
                  <FormControl variant='outlined' className='w-full '>
                    <InputLabel>
                      <FormattedMessage id='POST_CATEGORY_NAME' />
                    </InputLabel>
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
                            <span>
                              <FormattedMessage id='POST_CATEGORY_UNCATEGOIZE' />
                            </span>
                          ) : (
                            <>{category.category_name} </>
                          )}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>
                      <FormattedMessage id='POST_CATEGORY_HELPER' />
                    </FormHelperText>
                  </FormControl>
                </div>
                {/* End Post Category */}

                {/* Begin Post Link */}
                <div className='w-full my-2'>
                  <TextField
                    disabled={loading}
                    id='slug'
                    name='slug'
                    label={<FormattedMessage id='POST_SLUG_LABLE' />}
                    placeholder={<FormattedMessage id='POST_SLUG_PLACEHOLDER' />}
                    helperText={<FormattedMessage id='POST_SLUG_HELPER' />}
                    margin='normal'
                    variant='outlined'
                    className='w-full'
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
