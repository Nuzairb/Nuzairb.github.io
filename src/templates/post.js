import React from 'react'; 
import Helmat from 'react-helmet';
import { graphql } from 'gatsby';

export default function Template({data}) {
    const {markdownRemark: post} = data;
    // const post = data.markdownRemark;
    return (
        <div>
            <h1>{post.fromtmatter.title}</h1>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`