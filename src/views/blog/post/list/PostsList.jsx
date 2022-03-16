import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import SVG from 'react-inlinesvg';
import moment from 'jalali-moment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {
  Search,
} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';

import { useHistory } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import Actions from './Actions/Actions'

import DeletePostModal from '../delete/DeletePostModal';
import Actions from './Actions/Actions';
import { fetchAllPosts } from 'actions/post/postActions';
import backIcon from 'img/icons/arrows/arr063.svg';
import searchIcon from 'img/icons/general/gen004.svg';
import nocontectImg from 'img/media/no-content.svg';

export default function PostsList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { SearchBar } = Search;
  const [postStatusFilter, setPostStatusFilter] = useState('');

  const { postsData, postsCountData, postDeleteSuccMSG } = useSelector(
    (state) => ({
      postsData: state.post.post.posts,
      postsCountData: state.post.post.totalCount,
      postDeleteSuccMSG: state.post.post.postDeleteSuccMSG,
    }),
    shallowEqual
  );

  //   const customTotal = (from, to, size) => (
  //     <span className='react-bootstrap-table-pagination-total'>
  //       {' '}
  //       نمایش از {from} به {to} تا {size} نتیجه
  //     </span>
  //   )

  useEffect(() => {
    dispatch(fetchAllPosts());

    if (postDeleteSuccMSG === true) {
      dispatch(fetchAllPosts());
    }
  }, [postDeleteSuccMSG]);
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selectionHeaderRenderer: ({ mode }) => (
      <>
        <div classes='form-check form-check-sm form-check-custom form-check-solid'>
          <input className='form-check-input' type={mode} />
        </div>
      </>
    ),
    selectionRenderer: ({ mode }) => (
      <>
        <div classes='form-check form-check-sm form-check-custom form-check-solid '>
          <input className='form-check-input' type={mode} />
        </div>
      </>
    ),
  };
  const customTotal = (from, to, size) => (
    <span className='react-bootstrap-table-pagination-total'>
      {' '}
      از {from} به {to} تعداد {size} عدد
    </span>
  );

  const PaginationOptions = {
    pageStartIndex: 0, // first page will be 0, default is 1
    paginationSize: 3, // the pagination bar size, default is 5
    showTotal: false, // display pagination information
    sizePerPageList: [
      {
        text: 'در هر صفحه 10 عدد',
        value: 10,
      },
      {
        text: 'در هر صفحه 30 عدد',
        value: 30,
      },
      {
        text: 'نمایش همه',
        value: postsCountData,
      },
    ], // A numeric array is also available: [5, 10]. the purpose of above example is custom the text
    withFirstAndLast: false, // hide the going to first and last page button
    alwaysShowAllBtns: true, // always show the next and previous page button
    firstPageText: 'اولین', // the text of first page button
    prePageText: 'صفحه قبل', // the text of previous page button
    nextPageText: 'صفحه بعد', // the text of next page button
    lastPageText: 'اخرین', // the text of last page button
    nextPageTitle: 'نمایش بعدی', // the title of next page button
    prePageTitle: 'نمایش قبلی', // the title of previous page button
    firstPageTitle: 'نمایش اولین', // the title of first page button
    lastPageTitle: 'نمایش آخرین', // the title of last page button
    hideSizePerPage: false, // hide the size per page dropdown
    paginationTotalRenderer: customTotal,
    hidePageListOnlyOnePage: true, // hide pagination bar when only one page, default is false
  };

  const selectOptions = {
    'پرداخت شده': 'پرداخت شده',
    'پرداخت نشده': 'پرداخت نشده',
    'در انتظار بررسی': 'در انتظار بررسی',
    'نمایش همه موارد': '',
  };

  const columns = [
    {
      dataField: 'id',
      text: 'شماره مقاله',
      sort: true,
      headerClasses: 'text-center fw-light pr-3',
    },
    {
      dataField: 'category_id',
      text: 'دسته',
      sort: true,
      headerClasses: 'text-center fw-light pr-3',
    },
    {
      dataField: 'post_name',
      text: 'نام مقاله',
      sort: true,
      headerClasses: 'text-center fw-light pr-3',
    },

    {
      dataField: 'active',
      text: 'وضعیت مقاله',
      sort: true,
      formatter: (e, row, rowIndex) => {
        return (
          <>
            {row.active === 0 ? (
              <>
                <span className='badge badge-pill badge-danger  fw-light fs-8'>غیر فعال</span>
              </>
            ) : null}
            {row.active === 1 ? (
              <>
                <span className='badge badge-pill badge-success  fw-light fs-8'>فعال</span>
              </>
            ) : null}
          </>
        );
      },
      headerClasses: 'text-center fw-light pr-3',
      filter: textFilter({
        defaultValue: postStatusFilter,
        style: { display: 'none' },
      }),
    },

    {
      dataField: 'publish_id',
      text: 'نوع مقاله',
      sort: true,
      formatter: (e, row, rowIndex) => {
        return (
          <>
            {row.publish_id === 1 ? (
              <>
                <span className='text-success fw-light fs-7'>منتشر شده</span>
              </>
            ) : null}
            {row.publish_id === 2 ? (
              <>
                <span className='text-warning fw-light fs-7'>پیش نویس</span>
              </>
            ) : null}
            {row.publish_id === 3 ? (
              <>
                <span className='text-info fw-light fs-7'>بایگانی شده</span>
              </>
            ) : null}
          </>
        );
      },
      headerClasses: 'text-center fw-light pr-3',
      filter: textFilter({
        defaultValue: postStatusFilter,
        style: { display: 'none' },
      }),
    },
    {
      dataField: 'created_at',
      text: 'زمان ثبت',
      sort: true,
      formatter: (e, row, rowIndex) => {
        return (
          <>
            <span className=''>
              {moment(row.created_at).locale('fa').format('hh:mm - YYYY/MM/DD ')}
            </span>
          </>
        );
      },
      headerClasses: 'text-center fw-light pr-3',
    },
    {
      dataField: 'action',
      text: 'عملیات',
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          dispatch({ type: 'POST_ROW_ID', payload: row.id });
        },
      },
      formatter: (e, row, rowIndex) => {
        return (
          <>
            <Actions />
          </>
        );
      },
      // formatExtraData: {
      //   dispatch: dispatch,

      // },
      classes: 'text-right pr-0',
      headerClasses: 'text-center fw-light pr-3',
      style: {
        minWidth: '100px',
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: 'id',
      order: 'desc',
    },
  ];

  const backToDashboard = () => {
    history.push(`/dashboard`);
  };

  const goNewPostPage = () => {
    history.push(`/post/new`);
  };

  return (
    <>
      {/* Delete Post Modal */}
      <DeletePostModal />
      {/* Begin Header */}
      <div className='bg-white w-full rounded-lg  shadow-md'>
        <div className='p-5 flex md:justify-between items-center md:flex-row sm:flex-col sm:justify-center'>
          <h2 className='font-normal text-sm text-gray-800'>لیست مقالات وب سایت</h2>
          <div className='flex justify-between items-center'>
            <button
              onClick={goNewPostPage}
              className='bg-primary mx-2 px-3 py-2 rounded-lg text-white hover:shadow-lg hover:bg-sky-500 transition-all duration-300 flex justify-between  items-center'
            >
              <span className='fs-6 text-light fw-light'>ایجاد مقاله جدید</span>
            </button>
            <button
              onClick={backToDashboard}
              className='bg-primary mx-2 px-3 py-2 rounded-lg text-white hover:shadow-lg hover:bg-sky-500 transition-all duration-300 flex justify-between  items-center'
            >
              <span className='fs-6 text-light fw-light'>بازگشت به پیشخوان</span>
              <span className='svg-icon svg-icon-3 svg-icon-white mx-2'>
                <SVG src={backIcon} />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* End Header Card */}
      {/* End Header */}
      {postsData.length === 0 ? (
        <>
          <div className='container'>
            <div className='w-full'>
              <div
                style={{ height: '100%' }}
                className=' p-10 my-3 rounded-lg flex gap-5 items-center justify-center'
              >
                <SVG style={{ height: 100 }} src={nocontectImg} />

                <h6 className='text-gray-700'>در حال حاضر هیچ مقاله ای در سامانه ثبت نشده است</h6>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='bg-white shadow-lg h-full w-full my-3 rounded-lg'>
            <div className='p-6 w-full'>
              <ToolkitProvider keyField='id' data={postsData} columns={columns} search>
                {(props) => (
                  <div className='w-full'>
                    {/* Begin search */}
                    <div className='flex md:flex-row flex-col items-center relative w-full gap-3   my-3'>
                      {/* Begin Search Wrape */}
                      <div className='flex items-center gap-3 w-full'>
                        <span className='svg-icon svg-icon-1 position-absolute ms-6'>
                          <SVG src={searchIcon} />
                        </span>
                        <SearchBar
                          
                          srText=''
                          placeholder='جستجو در مقالات'
                          className='bg-white  focus:outline-none rounded-sm h-[50px] shadow-md h-full border px-2 py-3 border-gray-300 text-sm text-center  '
                          {...props.searchProps}
                        ></SearchBar>
                      </div>
                      {/* End Search Wrape */}

                      {/* End search */}

                      {/* Begin Select Filter */}
                      <div className='md:w-1/4 w-full sm:w-full shadow-md'>
                        <FormControl fullWidth>
                          <InputLabel className='text-sm'>فیلتر محتوا</InputLabel>
                          <Select
                            value={postStatusFilter}
                            label='فیلتر محتوا'
                            className='z-10 h-[50px] text-sm'
                            onChange={(e) => setPostStatusFilter(e.target.value)}
                          >
                            <MenuItem className='bg-white z-10' value=''>
                              نمایش همه موارد
                            </MenuItem>
                            <MenuItem className='bg-white z-10' value={1}>
                              منتشر شده
                            </MenuItem>
                            <MenuItem className='bg-white z-10' value={2}>
                              پیش نویس
                            </MenuItem>
                            <MenuItem className='bg-white z-10' value={3}>
                              بایگانی شده
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      {/* End Select Filter */}
                     
                    </div>

                    <div className='dataTables_wrapper dt-bootstrap4 w-full no-footer'>
                      <BootstrapTable
                        wrapperClasses='table-responsive table table-row-dashed fs-6 gy-5 dataTable  '
                        headerClasses='text-start text-center text-gray-800 text-muted fw-bold fs-6 text-uppercase gs-0'
                        bodyClasses='text-gray-700 fw-light fs-6 text-center w-full'
                        selectRow={selectRow}
                        classes='table align-middle table-row-dashed fs-7 gy-5 dataTable no-footer'
                        bordered={false}
                        loading={true}
                        defaultSorted={defaultSorted}
                        filter={filterFactory()}
                        bootstrap4
                        pagination={paginationFactory(PaginationOptions)}
                        {...props.baseProps}
                      />
                    </div>
                  </div>
                )}
              </ToolkitProvider>
            </div>
          </div>
        </>
      )}
    </>
  );
}
