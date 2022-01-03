import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../../Components/Title";
import blogs from "../../data/blogs";
import { MainLayout, InnerLayout } from "../../styles/Layouts";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogStyled>
        <Title title="Blogs" span="Blogs" />
        <InnerLayout className="blog">
          {blogs.map(({ _id, imagePrincipal, title }, i) => (
            <div key={_id} className="blog-item">
              <Link to={`/blogs/${_id}`}>
                <div className="image">
                  <img
                    className={i % 2 === 0 ? "" : "img-par"}
                    src={imagePrincipal}
                    alt="blog-img"
                  />
                </div>
              </Link>
              <div className="title">
                <Link to={`/blogs/${_id}`}>{title}</Link>
              </div>
            </div>
          ))}
        </InnerLayout>
      </BlogStyled>
    </MainLayout>
  );
}

const BlogStyled = styled.div`
  @media screen and (max-width:500px){
      h2{
          font-size: 2rem;
          span{
              font-size: 2rem;
          }
      }
  }
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width:500px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      height: 85%;
      overflow: hidden;
      padding-bottom: 1rem;
      img {
        width: 100%;
        object-fit: cover;
        opacity: 0.7;
        transition: all 0.4s ease-in-out;
        &:hover {
          opacity: 1;
          cursor: pointer;
          transform: rotate(2deg) scale(1.1);
        }
      }
      .img-par {
        &:hover {
          opacity: 1;
          cursor: pointer;
          transform: rotate(-2deg) scale(1.1);
        }
      }
    }
    .title {
      margin-top: 1rem;
      a {
        font-size: 1.6rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
        @media screen and (max-width:1200px) {
          font-size: 1rem;
      }
      }
    }
  }
`;

export default BlogsPage;
