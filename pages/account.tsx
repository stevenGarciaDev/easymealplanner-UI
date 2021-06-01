import styled from "styled-components";

const Page = styled.div`
    height: 100vh;
    width: 100%;
`;

const SettingsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: relative;
    top: -200px;
`;

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`;

const SettingsItemContainer = styled.div`
    align-items: center;
    border: 1px solid grey;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 0px 10px;
    width: 50%;
`;

const SettingItemName = styled.h2`
    font-size: 2rem;
`;

const SettingItemValue = styled.h2`
    font-size: 2rem;
`;

const DeleteButton = styled.button`
    background-color: maroon;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 10px;
`;

const Account = () => {
    return (
        <Page>
         
            <SettingsContainer>
                <Title>Account Settings</Title>
                <SettingsItemContainer>
                    <SettingItemName>Membership Type</SettingItemName>
                    <SettingItemValue>Free</SettingItemValue>
                </SettingsItemContainer>
                <SettingsItemContainer>
                    <SettingItemName>Membership Renewal Date</SettingItemName>
                    <SettingItemValue>6/20/2021</SettingItemValue>
                </SettingsItemContainer>
                <SettingsItemContainer>
                    <SettingItemName>Delete Account</SettingItemName>
                    <DeleteButton>Delete</DeleteButton>
                </SettingsItemContainer>
            </SettingsContainer>
        </Page>
    );
}

Account.requireAuth = true;

export default Account;