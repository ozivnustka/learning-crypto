import React from 'react';
import { Formik, Field, Form } from 'formik';
import './style.css'
import { addBlock } from '../../data'
import { PageContainer } from '../../componentsStyled/Shared'
import { isEmpty,omit } from 'ramda'

const UploadBlock = () => (
  <PageContainer>
    <h1>Upload new block</h1>
    <Formik
      initialValues={{
        index: null,
        minedBy: '',
        data1: '',
        data2: '',
        previousHash: '',
        hash: '',
        nonce: null,
      }}
      onSubmit={values => {
        const data = isEmpty(values.data2) ? values.data1 : [values.data1, values.data2].join('\n')
        
        return addBlock({
            ...omit(['data1', 'data2'],values),
            data,
        })
        .then(() => alert('Thank you for adding new block :)'))
        .catch(err => alert(err))
      }}
      render={() => (
        <Form>
          <label htmlFor="index">Index</label>
          <Field name="index" type="number" placeholder={0} />

          <label htmlFor="minedBy">Mined by</label>
          <Field name="minedBy" placeholder="Rumcajs" />

          <label htmlFor="data1">Data line 1</label>
          <Field name="data1" placeholder="Hello guys :)"/>

          <label htmlFor="data2">Data line 2</label>
          <Field name="data2" placeholder="Line 2 (optional)"/>

          <label htmlFor="previousHash">Previous hash</label>
          <Field name="previousHash" placeholder="0000..." />

          <label htmlFor="hash">Hash</label>
          <Field name="hash" placeholder="0000..." />

          <label htmlFor="nonce">Nonce</label>
          <Field name="nonce" type="number" placeholder={0} />

          <button type="submit">Submit</button>
        </Form>
      )}
    />
  </PageContainer>
)

export default UploadBlock