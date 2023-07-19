import '../../css/HoSo-ChoTiepNhan.css';

import $ from 'jquery';
import { useEffect, useState } from 'react';
import { PopupError, PopupInfo, PopupTransfer } from './Popup';
import { getData } from '../../core/BaseDA';
import { NavLink, useLocation } from 'react-router-dom';
import { FileStatus } from '../../const/file-status';

export default function HoSoChoTiepNhan() {
    const location = useLocation();

    const handle_acceptFile = (loanCode) => {
        setLoanApplicationCode(loanCode);
        setShowInfo(!showInfo);
    }
    const handle_transferFile = (loanCode) => {
        setLoanApplicationCode(loanCode);
        setShowTransfer(!showTransfer);
    }
    const handle_refuseFile = (loanCode) => {
        setLoanApplicationCode(loanCode);
        setShowError(!showError);
    }

    const [updateUI, setUpdateUI] = useState(false);

    const [loanApplicationCode, setLoanApplicationCode] = useState();

    const [showError, setShowError] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showTransfer, setShowTransfer] = useState(false);

    const [data, setData] = useState({});
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJudnZhbmgxIiwiaWF0IjoxNjg5NjcwNDY0LCJleHAiOjE2ODk2ODg0NjR9.4VoZV2OZfHOAOusRiVY4afeU7yfX7CLhbYI4uTs6cnIjhFhWH9xUfKHOFmhiyO3Gn0-yD5A1WAy2wPCa5svOgw";

    const getProcessTask = async ({ page = 1, size = 10, isReceived = 0 }) => {
        try {
            const response = await getData(
                `http://10.14.107.5:8091/jlos/task/all?page=${page}&size=${size}&isReceived=${isReceived}`,
                {
                    headers: {
                        token: token,   
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            setData(response.data);
        } catch (error) {
            console.error('Failed to fetch file:', error);
        }
    };

    useEffect(() => {
        $('body').on('click', '.close-popup, .popup-overlay', function (ev) {
            if ($('.close-popup').is(ev.target) || $('.popup-overlay').is(ev.target)) {
                setShowError(false);
                setShowInfo(false);
                setShowTransfer(false);
            }
        });
        getProcessTask({ page: 1, size: 10, isReceived: 1 });
    }, []);

    return (
        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={2} cateid={140} id="daf54f52-ac85-421a-8f92-45b5d573cfeb">
            {
                showInfo &&
                <PopupInfo
                    code={loanApplicationCode}>
                </PopupInfo>
            }

            {
                showError &&
                <PopupError
                    code={loanApplicationCode}>
                </PopupError>
            }

            {
                showTransfer &&
                <PopupTransfer
                    code={loanApplicationCode}>
                </PopupTransfer>
            }

            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" scroll="true" level={3} cateid={140} id="a69ddbe8-372b-453f-8dcc-e86716247d5a">
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={4} cateid={140} id="f4539199-339c-4900-bd23-0f1df41248ff">
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="ae4cb46b-c2f4-44c2-9237-d1987f2e0d3e">
                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={6} cateid={140} id="54578414-21de-4461-adb4-709a18366331">
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="a6043f9e-04ed-4f80-aa41-85de61069315">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="629bacab-6ac5-4564-b2c4-4f4603f9dc6e">Hồ sơ chờ tiếp nhận</div>
                            </div>
                            <div className="w-frame wbaseItem-value w-row breadcrumb" wrap="nowrap" level={7} cateid={140} id="f9949740-36d9-4ebd-8401-347e54c1ffa5">
                                <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={8} cateid={29} id="dd7adc22-bfae-4621-87be-579f4440e176">
                                    <div className="w-text wbaseItem-value" name-field="Text" level={9} cateid={139} id="cc69d235-5620-4e61-bd7e-9ed0c9d07161">Công việc của tôi</div>
                                    <div className="w-svg wbaseItem-value" level={9} cateid={115} id="e3992ea1-bec2-411c-8bea-83b9d2ef96e1">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.32236 4.04408C8.96293 3.65197 8.37041 3.65197 8.01097 4.04408C7.66301 4.42368 7.66301 5.03087 8.01097 5.41046L14.0514 12L8.01097 18.5895C7.66301 18.9691 7.66301 19.5763 8.01097 19.9559C8.37041 20.348 8.96293 20.348 9.32236 19.9559L15.989 12.6832C16.337 12.3036 16.337 11.6964 15.989 11.3168L9.32236 4.04408Z" fill="#28282999" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                        </svg>
                                    </div>
                                </button>
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="d05f3eff-324d-4351-95b0-aabf90f77dae">Hồ sơ chờ tiếp nhận</div>
                            </div>
                        </div>
                    </div>
                    <form className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="cada4d94-bb6b-45c9-bae9-637844fbc21e">
                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={6} cateid={140} id="263d28e2-e30f-488b-9b8a-4106039d2b02">
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="35bcb2f2-c707-4d5b-93d9-14e1c9dd5c1b">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="7ed67db0-7636-487c-8322-02fefb155fd3">Tên khách hàng</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="e15b2040-4787-44dc-a3e1-c94d2b3e6d90" placeholder="Nhập tên khách hàng" >
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="f2a95a6c-36bd-45d5-8ddc-34705892f3b0">
                                        <div className="textfield"><input id="textfield-f2a95a6c-36bd-45d5-8ddc-34705892f3b0" name="Textformfield" placeholder="Nhập tên khách hàng" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="9f4f1fb3-8fae-4408-9004-ee1c5795942e">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="d6bbbfd6-bf0c-4269-bd31-bb3a6b554915">Số CCCD</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="1bf08dc4-398a-49f8-920a-f64b1818e146" placeholder="Nhập tên số CCCD">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="f3f14435-6ebd-42dd-a765-4ac351a4d655">
                                        <div className="textfield">
                                            <input id="textfield-f3f14435-6ebd-42dd-a765-4ac351a4d655" name="Textformfield" placeholder="Nhập tên số CCCD" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="052f7f46-f2c0-4c42-bba2-a6221eccf4a2">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="e106c97e-61af-4823-a994-c3975b5d3b19">Số điện thoại</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="9ebf89ff-fd9c-41a2-9f96-882fde14b9d0" placeholder="Nhập số điện thoại">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="84fb82a5-bb94-4558-9834-b165d819a32d">
                                        <div className="textfield">
                                            <input id="textfield-84fb82a5-bb94-4558-9834-b165d819a32d" name="Textformfield" placeholder="Nhập số điện thoại" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="46a2d952-0b7f-4852-ad30-03391313a06d">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="99e204aa-f235-4827-9550-6dc5fc7867cf">Đại lý</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="3b437ae7-6d17-4da3-9b12-b0cc79d1153a" placeholder="Chọn đại lý">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="96ae685a-2c8e-4090-b719-79df15fa85c0">
                                        <div className="textfield">
                                            <input id="textfield-96ae685a-2c8e-4090-b719-79df15fa85c0" name="Textformfield" placeholder="Chọn đại lý" />
                                        </div>
                                    </div>
                                    <div className="w-svg wbaseItem-value" level={9} cateid={115} id="20856454-5dbe-478f-a2dc-00825ca023c0">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="22cd1d2f-540e-47ab-bdf4-8d74937b86ca">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="5ef74bd5-b765-4f7c-94d1-ed93359e4a1c">Mã hồ sơ</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="6feadcab-a525-41a9-853e-ffef6e5cfcd7" placeholder="Nhập mã hồ sơ">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="6fb839ce-6dee-45bc-89df-fc462070f43f">
                                        <div className="textfield">
                                            <input id="textfield-6fb839ce-6dee-45bc-89df-fc462070f43f" name="Textformfield" placeholder="Nhập mã hồ sơ" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="6285e303-1982-4885-86f7-977cb1bff0ce">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="39a08b3b-4db6-4570-89a3-5a236dc4e341">Số CIF</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="a316b16d-4bec-47bf-aca6-55b33588906b" placeholder="Nhập số CIF">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="a0b7b390-4c8f-44a6-9b55-c7ad2f632080">
                                        <div className="textfield">
                                            <input id="textfield-a0b7b390-4c8f-44a6-9b55-c7ad2f632080" name="Textformfield" placeholder="Nhập số CIF" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="2dcf366f-2c5d-4e3f-8071-8b3136f247ba">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="0581bbe8-077a-4428-b30c-a95a4ed6862f">Số hợp đồng</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="7965647c-49e4-46be-93ed-69fc2a660078" placeholder="Nhập số hợp đồng">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="1fa9f069-5508-486d-a717-94351b6feb7a">
                                        <div className="textfield">
                                            <input id="textfield-1fa9f069-5508-486d-a717-94351b6feb7a" name="Textformfield" placeholder="Nhập số hợp đồng" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="b73d00b7-a48c-4b62-8557-10cc68beeaaa">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="0029d58e-dbb7-45ad-b870-cbcd8f9c3bee">Trạng thái</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="fdc1fffe-fcbd-431a-b435-7ebb9e19bf02" placeholder="Trạng thái">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="1eb4d3cb-9770-40ba-b790-03465ae15417">
                                        <div className="textfield">
                                            <input id="textfield-1eb4d3cb-9770-40ba-b790-03465ae15417" name="Textformfield" placeholder="Trạng thái" />
                                        </div>
                                    </div>
                                    <div className="w-svg wbaseItem-value" level={9} cateid={115} id="8106b3d0-4e17-4767-a6b5-029e873f3b84">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="bab3842e-f537-4b3f-9d56-2ea6bfa92fbd">
                            <button type="button" className="w-button wbaseItem-value w-row event-click" wrap="nowrap" name-field="Button" level={7} cateid={29} id="464dd3c0-e50f-420b-aa06-0421cf2cc58f">
                                <div className="w-svg wbaseItem-value" level={8} cateid={115} id="11fd783a-20ff-4506-aef6-2cfe3e0c49cd">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.0313 2.00835C21.5288 2.07581 21.8774 2.53382 21.81 3.03135L21.0827 8.39498C21.0153 8.89173 20.5586 9.2402 20.0617 9.17395L14.6072 8.44668C14.1095 8.38032 13.7598 7.92309 13.8262 7.42541C13.8926 6.92774 14.3498 6.57809 14.8475 6.64445L18.3484 7.11124C16.8702 5.25663 14.5726 4.09064 12 4.09064C7.50208 4.09064 3.81818 7.77454 3.81818 12.2725C3.81818 12.7745 3.41117 13.1816 2.90909 13.1816C2.40701 13.1816 2 12.7745 2 12.2725C2 6.77038 6.49792 2.27246 12 2.27246C15.0381 2.27246 17.7813 3.61127 19.6033 5.77412L20.0083 2.78705C20.0757 2.28953 20.5338 1.94089 21.0313 2.00835Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                        <path d="M22 12.2733C22 11.7713 21.5929 11.3643 21.0909 11.3643C20.5888 11.3643 20.1818 11.7713 20.1818 12.2733C20.1818 16.7713 16.4979 20.4552 12 20.4552C9.42714 20.4552 7.12925 19.2889 5.6511 17.434L9.15251 17.9009C9.65018 17.9672 10.1074 17.6176 10.1738 17.1199C10.2401 16.6222 9.89048 16.165 9.39281 16.0986L3.93826 15.3714C3.44137 15.3051 2.98462 15.6536 2.91726 16.1503L2.18999 21.514C2.12253 22.0115 2.47117 22.4695 2.96869 22.537C3.46621 22.6044 3.92423 22.2558 3.99169 21.7583L4.39665 18.7716C6.21865 20.9345 8.96182 22.2733 12 22.2733C17.502 22.2733 22 17.7754 22 12.2733Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                    </svg>
                                </div>
                                <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="9c54945d-ecd9-4a95-9048-93d259101ded">Xóa bộ lọc</div>
                            </button>
                            <button type="button" className="w-button wbaseItem-value w-row event-click" wrap="nowrap" name-field="Button" level={7} cateid={29} id="8169d35e-6002-4a61-bf57-d202588ccc0c">
                                <div className="w-svg wbaseItem-value" level={8} cateid={115} id="76e5b0d0-20b1-470b-9ed3-ba4927d31f7b">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.0432 16.3052C13.6693 17.4041 11.9267 18.0612 10.0306 18.0612C5.59543 18.0612 2 14.4658 2 10.0306C2 5.59543 5.59543 2 10.0306 2C14.4658 2 18.0612 5.59543 18.0612 10.0306C18.0612 11.9268 17.4041 13.6694 16.3051 15.0433L21.9999 20.7381L20.738 22L15.0432 16.3052ZM3.78458 10.0306C3.78458 6.58103 6.58103 3.78458 10.0306 3.78458C13.4802 3.78458 16.2767 6.58103 16.2767 10.0306C16.2767 11.7129 15.6116 13.2399 14.53 14.3629L14.3629 14.53C13.2399 15.6116 11.7129 16.2767 10.0306 16.2767C6.58103 16.2767 3.78458 13.4802 3.78458 10.0306Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                                    </svg>
                                </div>
                                <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="fd9708ca-416d-411b-8a5c-7d9a6fcf581b">Tìm kiếm</div>
                            </button>
                        </div>
                    </form>

                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="e025e5d9-82b3-44a4-8b63-595b6650c1c1">
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="01accbd5-8756-42e4-817f-bc947e04ff62">
                            <div className="w-text wbaseItem-value" level={7} cateid={139} id="d6b5cfdb-ace2-4d91-a066-0c50de4d91e1">Danh sách kết quả</div>
                        </div>
                        <table className="w-table wbaseItem-value" type={0} name-field="Table" level={6} cateid={117} id="a2163b4a-5718-4ef8-a2f9-d8405286e06b">
                            <tbody><tr className="table-row">
                                <td id="1x1" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="e90ac94f-3765-49d2-a2c8-0713b4fca7fb">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="730cf392-e57a-4f2e-a77b-32b44e6f9784">STT</div>
                                    </div>
                                </td>
                                <td id="1x2" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="30279867-954b-4ecd-90b9-5e5f0d830d17">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="ab91f2e2-1601-4281-a35f-08321fe9ce44">Mã hồ sơ</div>
                                    </div>
                                </td>
                                <td id="1x3" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="a746f4ef-1c8d-43fe-906e-21501fddf35b">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="8878b02e-0344-4d6d-b869-052d091b67f7">Tên khách hàng</div>
                                    </div>
                                </td>
                                <td id="1x4" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="ae2fc440-887c-432b-91b2-f8002dcc3f04">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="baf309fa-5a6f-4e3a-b583-2e9650d1746c">Số CCCD</div>
                                    </div>
                                </td>
                                <td id="1x5" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="144d462b-94d4-444c-a13e-379485b18704">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="eba3601b-5e15-4e01-9477-59d41a75bebd">Số điện thoại</div>
                                    </div>
                                </td>
                                <td id="1x6" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="8fbebdde-d65f-45aa-8bed-964e1e4dd453">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="cb8e1d77-99b3-4a49-a5a1-308f8e93f013">Đại lý</div>
                                    </div>
                                </td>
                                <td id="1x7" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="ba8a5f46-9e65-4b3e-9358-8aefb906295a">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="cd30ccc6-9c2c-40a3-8137-ed8f4ff44932">Số CIF</div>
                                    </div>
                                </td>
                                <td id="1x8" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="0bab3ef6-ebed-409b-8b3a-cdf0bcbceed9">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="1a2c424d-bc4d-4a43-8bd4-273a8b16821b">Số hợp đồng</div>
                                    </div>
                                </td>
                                <td id="1x9" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="c3320265-f267-4659-9da6-6a7cd6f8223b">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="8dc63951-cee2-4535-8c7a-734ce15c3d09">Trạng thái</div>
                                    </div>
                                </td>
                                <td id="1x10" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="9fbb8323-10de-474d-963e-2edf9bacfef9" />
                                </td>
                            </tr>
                                {data?.content != null &&
                                    data.content.map((item, index) => {
                                        return (
                                            <tr key={item.loanApplicationCode} className="table-row">
                                                <td id="2x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="30847abb-bde7-41d2-a9a5-61e60973c3ee">
                                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="092ecc70-66c4-4dcb-a1f1-ebe1e293a93e">{index + 1}</div>
                                                    </div>
                                                </td>
                                                <td id="2x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="c0f8f098-dde0-4eec-87be-5772a90c7328">
                                                        <NavLink to={FileStatus.navigation_router(item.status.id, location.pathname)} className="nav-link w-text wbaseItem-value" level={8} cateid={139} id="2a9773eb-1539-4eca-adb4-7b44b72c040d">{item.loanApplicationCode}</NavLink>
                                                    </div>
                                                </td>
                                                <td id="2x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="5702317f-bcfa-41e3-9c6a-fd9d5a5fc2a4">
                                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="ecfa7708-6b6b-4107-82c9-874c91c8c567">{item.customerName}</div>
                                                    </div>
                                                </td>
                                                <td id="2x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="f422ef4c-6f33-48aa-b671-c4c81fee21ee">
                                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="86fbb0fb-acb5-4c33-a647-e4b078f1a585">{item.citizenId}</div>
                                                    </div>
                                                </td>
                                                <td id="2x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="108b942b-d391-486d-bcf7-bc8f329109cf">
                                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="b9255216-50a1-499c-868f-48171ab9bbe6">{item.phoneNumber}</div>
                                                    </div>
                                                </td>
                                                <td id="2x6" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="c5bb03a1-50d6-4cb8-b568-adaf48a9d804">
                                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="a9fca928-c481-456e-8cd3-2d8a3f63c2f0">{item.dealerInfo.dealerName}</div>
                                                    </div>
                                                </td>
                                                <td id="2x7" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="61a07e75-fdb6-4c76-bb2c-8f828ffe6d6e">
                                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="dbe491e4-725c-4c58-a136-79289d094c5e">{item.cif}</div>
                                                    </div>
                                                </td>
                                                <td id="2x8" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="258410cd-50a0-4e03-a3db-d6945edc8866">
                                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="2b656a39-8cd5-4a5f-a937-e134e7229ff9">{item.contractNumber}</div>
                                                    </div>
                                                </td>
                                                <td id="2x9" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="9e0dfe33-60c7-414c-90f7-b6504af3e690">
                                                        {FileStatus.get_status(item.status.id)}
                                                    </div>
                                                </td>
                                                <td id="2x10" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="f62f438f-1a19-4bf1-9b11-4d2986e930da">
                                                        <button onClick={() => handle_acceptFile(item.loanApplicationCode)} type="button" className="ctn_accept w-button event-click wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={8} cateid={29} id="2ab47bef-f808-4731-9cf0-d5d9d999580c">
                                                            <div className="w-text wbaseItem-value" name-field="Text" level={9} cateid={139} id="5ff5b562-cfa3-4a3e-ae69-62eebe46ce48">Tiếp nhận</div>
                                                        </button>
                                                        <button onClick={() => handle_transferFile(item.loanApplicationCode)} type="button" className="ctn_file-transfer w-button event-click wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={8} cateid={29} id="16de86cc-4fce-4f2b-b2e4-58977e9da9c9">
                                                            <div className="w-text wbaseItem-value" name-field="Text" level={9} cateid={139} id="db5133c7-6767-438e-8728-599d440f3c70">Chuyển hồ sơ</div>
                                                        </button>
                                                        <button onClick={() => handle_refuseFile(item.loanApplicationCode)} type="button" className="ctn_refuse w-button event-click wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={8} cateid={29} id="c552aae8-bfdc-4e3e-abb6-11481d839cfc">
                                                            <div className="w-text wbaseItem-value" name-field="Text" level={9} cateid={139} id="f0e006da-5404-404d-b28a-6d102b60f743">Từ chối</div>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="74f54186-4edf-45b8-b417-bbf105d2aaf1">
                            <div className="w-text wbaseItem-value" level={7} cateid={139} id="9a0d32fa-a362-447a-afbe-dd32bd961aa4">Hiển thị 1-10 trong tổng số 100 bản ghi</div>
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="50f7c082-a8be-46ab-9774-b9b1ee23dca0">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="8bd0a858-6c16-4b84-87d1-17ccf955fd9f">
                                    <div className="w-text wbaseItem-value" level={9} cateid={139} id="1091e857-43d7-4cda-b835-6616349ae0a6">Items/page</div>
                                    <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={9} cateid={85} id="0c6db2bc-2c9c-4133-8b36-a123941e35ae" placeholder={10}>
                                        <div className="wbaseItem-value" name-field="Textfield" level={10} cateid={86} id="daf0475d-5390-438c-9109-ac771542a1ec">
                                            <div className="textfield">
                                                <input id="textfield-daf0475d-5390-438c-9109-ac771542a1ec" name="Textformfield" placeholder={10} />
                                            </div>
                                        </div>
                                        <div className="w-svg wbaseItem-value" level={10} cateid={115} id="dd5093b7-5b4a-48da-b79c-fefaca0da3bb">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="4a9a721f-184d-4e15-8022-16390d6b475f">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="8062f291-6dfa-4599-8848-725ada205524">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="6f386463-e0d0-4e2d-887d-fc2f9ac44984">Previous</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="ceddeca3-b821-4772-8db7-d7f7f9e69091">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="7f042b9b-9489-4982-adc6-39a387a3fe12">1</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="ebfa7f7f-86b9-48a3-ad6d-0b0bd34c57f2">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="2ccfbcdb-727b-4d9e-96f0-2e039eb3188a">2</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="269d9dec-a4cc-4dcf-8c40-714a8d9f21df">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="10cf8916-a982-492d-8994-4c62099c53b5">3</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="f947b211-470a-4647-9be0-6958da1890b3">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="d2c86e40-3222-4109-935d-e285b8e37d0c">4</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="1dcdd794-0215-482d-b7fa-6aef36d89e99">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="876fe33a-b287-41e3-a1d1-e314015864a9">...</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="08a06737-17ae-4329-8dbc-8a7c516e8521">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="8929dd7e-aa02-423f-8421-c50e40f18032">5</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="f06d0776-8410-4808-b219-dba4f280936f">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="d64dce09-060b-404b-97ba-6baeffcd77b4">50</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="561290de-46e2-4c7e-9174-c7cc72dec5d3">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="ca04e295-be7b-4d9a-a8b9-b7552e31a3d7">Next</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}