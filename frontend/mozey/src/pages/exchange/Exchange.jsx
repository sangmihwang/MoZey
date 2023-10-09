import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as components from "components";
import useStore from "store";
import voteAPI from "../../api/voteAPI";
const Exchange = () => {
  const [showModal, setShowModal] = useState(false);
  const handleConfirm = async () => {
    setShowModal(false);
  };
  return (
    <div>
      <S.Wrap>
        <components.Exchange></components.Exchange>
        {showModal && (
          <S.ModalOverlay>
            <S.Modal>
              <S.ModalContent>포인트 교환 완료 !</S.ModalContent>
              <S.ConfirmButton onClick={handleConfirm}>확인</S.ConfirmButton>
            </S.Modal>
          </S.ModalOverlay>
        )}
      </S.Wrap>
    </div>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    height: 100%;
  `,
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  `,
  Modal: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    padding: 10px 20px;
    border-radius: 10px;
    width: 70%;
    height: 30%;
    min-height: 150px;
    max-width: 500px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
  ModalContent: styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontsize.title3};
    line-height: ${({ theme }) => theme.lineheight.quiztitle};
    font-weight: 700;
    margin: 20px;
  `,
  ConfirmButton: styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.red};
      color: ${({ theme }) => theme.color.red};
    }
  `,
};

export default Exchange;
