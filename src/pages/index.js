  
import React from "react"

import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default () => {
    return (
        <Layout>
            <h2>Hi, I'm Coco</h2>
            <p>I'm a Software Engineer based in Philadelphia.</p>
            <Link to="/contact">Contact Me</Link>
        </Layout>
    )
}