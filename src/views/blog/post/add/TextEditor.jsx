import React, { useState } from 'react';
import axios from 'axios';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledcEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import Crud from 'cruds';

export default function TextEditorComponent() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState('');

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then((file) => {
            let formData = new FormData();
            formData.append('files[]', file);

            // Get token from localstorage
            const token = localStorage.getItem('token');

            // Headers
            const config = {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${token}`,
              },
            };
            axios
              .post(Crud.uploadFileURL, formData, config)
              .then((res) => {
                resolve({
                  default: `${Crud.APIURL}/assets/uploads/${res.data.filename}`,
                });
                dispatch({
                  type: 'UPLOAD_FILE_SUCC',
                  payload: res.data,
                });
              })
              .catch((err) => {
                dispatch({
                  type: 'UPLOAD_FILE_ERR',
                  payload: err.data,
                });
                reject(err);
              });
          });
        });
      },
    };
  }
  function uploadPlugin(postData) {
    postData.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
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
  };
  return (
    <>
      <div>
        <CKEditor
          editor={DecoupledcEditor}
          config={editorConfiguration}
          onReady={(editor) => {
            editor.ui.getEditableElement().parentElement.append(editor.ui.view.toolbar.element);
            // You can store the "editor" and use when it is needed.
            editor.editing.view.change((writer) => {
              writer.setStyle('height', '400px', editor.editing.view.document.getRoot());
            });
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            localStorage.setItem('postData', data);
            // setPostData({ data });
          }}
        />
      </div>
    </>
  );
}
