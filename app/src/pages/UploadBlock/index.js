import React from 'react';
import { withFormik } from 'formik';
import './style.css'
import { addBlock } from '../../data'
import { PageContainer } from '../../componentsStyled/Shared'

const UploadBlock = props => {
  const {
    values,
    isSubmitting,
    handleSubmit,
    handleChange,
  } = props;
  return (
    <PageContainer>
    <h1>Upload new block</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="index" style={{ display: 'block' }}>  Index </label>
      <input id="index" placeholder={0} type="number" value={values.index} onChange={handleChange}/>

      <label htmlFor="minedBy" style={{ display: 'block' }}>  Mined by </label>
      <input id="minedBy" placeholder="AiFi" type="text" value={values.minedBy} onChange={handleChange}/>

      <label htmlFor="data" style={{ display: 'block' }}>  Data </label>
      <textarea id="data" placeholder="Hello guys :)" type="number" value={values.data} rows="10" cols="100" resize="none" onChange={handleChange}/>

      <label htmlFor="previousHash" style={{ display: 'block' }}>  Previous hash </label>
      <input id="previousHash" placeholder="0000..." type="text" value={values.previousHash} onChange={handleChange}/>

      <label htmlFor="hash" style={{ display: 'block' }}>  Hash </label>
      <input id="hash" placeholder="0000..." type="text" value={values.hash} onChange={handleChange}/>

      <label htmlFor="nonce" style={{ display: 'block' }}>  Nonce </label>
      <input id="nonce" placeholder="0" type="number" value={values.nonce} onChange={handleChange}/>      

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
    </PageContainer>
  )
}

export default withFormik({
  mapPropsToValues: () => ({ 
    index: '',
    minedBy: '',
    data: '',
    previousHash: '',
    hash: '',
    nonce: '',
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => addBlock(values)
    .then(() => {
      resetForm(false)
      alert('Thank you for adding new block :)')
    }).catch(err => {
      setSubmitting(false)
      alert(err)
    }),
  displayName: 'BasicForm', // helps with React DevTools
})(UploadBlock)