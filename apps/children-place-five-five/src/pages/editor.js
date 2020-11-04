import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Editor from '../components/document-editor'


const SecondPage = ({location}) => {
  if(!location.state) return null
  const {selected} = location.state;
  if(!selected) return null
 

  return (
    <Layout
    location={location} 
     >
       <SEO  title="editor"/>
       <Editor selected={selected} />
    </Layout>
  )
}

export default SecondPage
