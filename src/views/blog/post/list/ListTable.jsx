import React, { useEffect } from 'react';
import moment from 'jalali-moment';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from 'actions/post/postActions';
import GlassterTable from '../../../../@core/components/Table/GlassterTable';

const columnsData = [
  { field: 'id', headerName: 'شماره مقاله', sortable: true, width: 70 },
  { field: 'category_id', headerName: 'دسته', sortable: true, width: 130 },
  { field: 'post_name', headerName: 'نام مقاله', sortable: true, width: 130 },
  {
    field: 'active',
    headerName: 'وضعیت مقاله',
    sortable: true,
    width: 90,
  },
  {
    field: 'publish_id',
    headerName: 'نوع مقاله',
    description: 'توضیح نوع مقاله',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.active || ''} ${params.row.post_name || ''}`,
  },
];

export default function ListTable() {
  const dispatch = useDispatch();

  const { data, postsCountData, postDeleteSuccMSG } = useSelector(
    (state) => ({
      data: state.post.post.posts,
      postsCountData: state.post.post.totalCount,
      postDeleteSuccMSG: state.post.post.postDeleteSuccMSG,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(fetchAllPosts());

    if (postDeleteSuccMSG === true) {
      dispatch(fetchAllPosts());
    }
  }, [postDeleteSuccMSG]);
  return (
    <>
      <div className='bg-white rounded-lg w-full h-full'>
        <div className='h-[400px] w-full '>
          <GlassterTable />
        </div>
      </div>
    </>
  );
}
