import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';

function ReviewsSection() {
    return (
        <InnerLayout>
            <ReviewsStyled>
                <Title title="Reviews" span="Reviews" />
            </ReviewsStyled>
        </InnerLayout>
    )
}

const ReviewsStyled = styled.section``;

export default ReviewsSection;