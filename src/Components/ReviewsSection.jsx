import React from 'react'
import styled from 'styled-components';
import Title from './Title';
import { InnerLayout } from '../styles/Layouts';
import ReviewsItem from './ReviewsItem';

function ReviewsSection() {
    return (
        <ReviewsStyled>
            <Title title="Reviews" span="Reviews" />
            <InnerLayout>
                <div className='reviews'>
                    <ReviewsItem
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo sunt."
                    />
                    <ReviewsItem
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo sunt. 2"
                    />
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: flex;
    }
`;

export default ReviewsSection;
