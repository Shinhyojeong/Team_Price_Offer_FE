import React from 'react'
import DIVIDER from '@components/templates/Divider'
import Iconbutton from '@components/templates/IconButton'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'

const goodImgurl = require('@assets/images/icon/review_good.svg').default.src
const sosoImgurl = require('@assets/images/icon/review_soso.svg').default.src
const badImgurl = require('@assets/images/icon/review_bad.svg').default.src

const ContentMyReview = props => {
  return (
    <div className="writereview">
      <div className="writereview-top-wrapper">
        <div className="text-wrapper">
          <div className="text-wrapper-texts">
            <div className="seller-name">황금효정</div>
            <div className="writereview-top-wrapper-text">
              님에게 작성한 후기
            </div>
          </div>
        </div>
        <div className="writereview-top-wrapper-goodsbox">
          <div className="goodsbox-text">거래상품</div>
          <div>
            <DIVIDER
              type="vertical"
              marginSize="3"
              style={{
                border: '0px solid #ddd',
              }}
            />
          </div>
          <div className="goodsbox-title">잠이 오는 보약 &gt;</div>
          <div className="goodsbox-state">새 생품 &gt;</div>
          <div className="goodsbox-category">식품</div>
        </div>
      </div>

      <div className="mywritereview-middle-wrapper">
        <div className="icon-list">
          <Iconbutton src={goodImgurl} className="icon" />
          <Iconbutton src={sosoImgurl} className="icon" />
          <Iconbutton src={badImgurl} className="icon" />
        </div>
        <div className="writereview-area">최고양 최고</div>
      </div>

      <div className="writereview-bottom-wrapper">
        <Button className="writereview-button">닫기</Button>
      </div>
    </div>
  )
}

export default ContentMyReview