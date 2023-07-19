import '../../css/HoSo-ChoXuLy.css';
import '../../css/popup-trang-thai.css';
import '../../const/file-status';
import { getData } from '../../core/BaseDA';

import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState, } from 'react';
import { FileStatus } from '../../const/file-status';
import Pagination from '../../test';

export default function HoSoChoXuLy() {
    const location = useLocation();
    // const size = 10;
    // const [page, setPage] = useState(1);
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
        getProcessTask({ page: 1, size: 10, isReceived: 1 });

    }, []);

    return (
        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={2} cateid={140} id="4efba3b1-ca5c-4267-adef-83d0e80bc2fa">
            {/* <Pagination totalPages={50}></Pagination> */}
            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" scroll="true" level={3} cateid={140} id="a9155bc4-0b6a-42b7-b23e-8eacf0269e06">
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={4} cateid={140} id="e37ee9df-809d-4530-a066-525bfbd6ddb8" scroll="true">
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="78cd5e27-6ed0-4f2e-9e49-3be4b7e6dd04">
                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={6} cateid={140} id="ef8e67de-9005-4236-8c4a-e2d8e503c772">
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="9cb07783-311f-465c-a770-35e61db9670e">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="842cdd4d-2a03-4a9d-a2e5-e271cb3e9364">Hồ sơ chờ xử lý</div>
                            </div>
                            <div className="w-frame wbaseItem-value w-row breadcrumb" wrap="nowrap" level={7} cateid={140} id="621135ea-9d57-4c1e-902b-eaacb6cad0a8"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={8} cateid={29} id="ff94e6c1-7bd4-4090-8ef5-4cd82e8f2b65">
                                <div className="w-text wbaseItem-value" name-field="Text" level={9} cateid={139} id="cf073ddc-7ab4-4b5b-b52a-5f727f4dc720">Công việc của tôi</div>
                                <div className="w-svg wbaseItem-value" level={9} cateid={115} id="8c50eed1-1618-4a55-80e8-b6a907150d5a"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.32236 4.04408C8.96293 3.65197 8.37041 3.65197 8.01097 4.04408C7.66301 4.42368 7.66301 5.03087 8.01097 5.41046L14.0514 12L8.01097 18.5895C7.66301 18.9691 7.66301 19.5763 8.01097 19.9559C8.37041 20.348 8.96293 20.348 9.32236 19.9559L15.989 12.6832C16.337 12.3036 16.337 11.6964 15.989 11.3168L9.32236 4.04408Z" fill="#28282999" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                </svg>
                                </div>
                            </button>
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="15a3b0e2-16e8-4658-aadf-ce23fe19901b">Hồ sơ chờ xử lý</div>
                            </div>
                        </div>
                    </div>
                    <form className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="96956ba7-1829-455d-a0b7-f70e4740cac0">
                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={6} cateid={140} id="e6e6e332-bccf-419a-b62b-1e31fa5ea641">
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="a7e78e69-8a5e-45c9-882c-d24b3e35405e">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="42bcdbf7-dd2f-4747-9c49-774179035134">Tên khách hàng</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="d8c65549-39b4-4846-bef5-20bf924077d6" placeholder="Nhập tên khách hàng">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="521788ac-d99a-441c-8e6a-76c20fc78ea5">
                                        <div className="textfield"><input id="textfield-521788ac-d99a-441c-8e6a-76c20fc78ea5" name="Textformfield" placeholder="Nhập tên khách hàng" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="9743ff87-002d-4493-9de5-c945138c7cf7">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="c823ec8a-9867-4f26-bedc-293dd4807e95">Số CCCD</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="58f98fdf-a36b-4bd6-bb58-ad55c5a2e436" placeholder="Nhập tên số cccd">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="755b1789-cdfd-4f6f-8d1e-3395cb0afa36">
                                        <div className="textfield"><input id="textfield-755b1789-cdfd-4f6f-8d1e-3395cb0afa36" name="Textformfield" placeholder="Nhập tên số CCCD" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="75c3aba0-a639-4ad4-bac1-d8fd7fc5788f">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="845a91d9-5be3-432f-8e81-a514baf527ca">Số điện thoại</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="43e07443-5462-4272-87f8-ba578c6d96c6" placeholder="Nhập số điện thoại">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="07a096d6-2264-4268-b2a7-a2cd022657e3">
                                        <div className="textfield"><input id="textfield-07a096d6-2264-4268-b2a7-a2cd022657e3" name="Textformfield" placeholder="Nhập số điện thoại" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="2b82e8e5-531d-4e37-85b1-1e67f9be9b10">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="e40fe363-eac1-458e-a803-3e8366756f92">Đại lý</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="ff102472-eb6f-4af8-89b7-ac0e401b0051" placeholder="Chọn đại lý">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="b71c04f8-54e9-4a9e-ae57-84b74dcd7ef2">
                                        <div className="textfield"><input id="textfield-b71c04f8-54e9-4a9e-ae57-84b74dcd7ef2" name="Textformfield" placeholder="Chọn đại lý" /></div>
                                    </div>
                                    <div className="w-svg wbaseItem-value" level={9} cateid={115} id="26fbd681-43f7-4701-a0d0-c3231e90c3e6"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                    </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="05408110-fc2c-4477-9dfc-2dbd3e8ffa14">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="3501b97e-edec-41e9-92be-de454c377240">Mã hồ sơ</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="47f03b19-55c6-4c06-93f1-83813771d56c" placeholder="Nhập mã hồ sơ">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="7f69257c-775a-40b4-b8b9-4da5f1b21b4b">
                                        <div className="textfield"><input id="textfield-7f69257c-775a-40b4-b8b9-4da5f1b21b4b" name="Textformfield" placeholder="Nhập mã hồ sơ" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="95d04fed-4483-4a52-b941-847df662da8d">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="bd083537-57da-419d-806a-3d9ce28dad42">Số CIF</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="582e665c-02fe-4a98-8513-a099591a334d" placeholder="Nhập số CIF">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="de9fab26-bc97-4637-8b03-99a1550c8829">
                                        <div className="textfield"><input id="textfield-de9fab26-bc97-4637-8b03-99a1550c8829" name="Textformfield" placeholder="Nhập số CIF" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="453085da-6ee1-472e-a570-a2d06fbdd0a0">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="e50fffb9-dfa2-46fa-99de-fd2613fa5d1b">Số hợp đồng</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="d9bd9b43-3b5a-4ac5-b94f-f92845e574c8" placeholder="Nhập số hợp đồng">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="a014e079-b137-46c3-a653-173c2cde32ac">
                                        <div className="textfield"><input id="textfield-a014e079-b137-46c3-a653-173c2cde32ac" name="Textformfield" placeholder="Nhập số hợp đồng" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="9b76094e-e812-4943-bcde-426c81186109">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="dfb745b2-9833-4767-a787-70270818944b">Trạng thái</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="8c794d79-d804-45f9-b6d6-3e2826c68f8b" placeholder="Trạng thái">
                                    <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="e5babbd9-1b87-4084-845d-f7552ef1fad5">
                                        <div className="textfield"><input id="textfield-e5babbd9-1b87-4084-845d-f7552ef1fad5" name="Textformfield" placeholder="Trạng thái" /></div>
                                    </div>
                                    <div className="w-svg wbaseItem-value" level={9} cateid={115} id="6052d86d-d867-4e35-85bf-21584337c4bd"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                    </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="d89257ed-efda-4189-9fcb-57621ae089f5"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="3da85c60-ac27-4d6f-b50f-0ac352254637">
                            <div className="w-svg wbaseItem-value" level={8} cateid={115} id="95dd1e24-2268-443a-8458-c247808d1090"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0313 2.00835C21.5288 2.07581 21.8774 2.53382 21.81 3.03135L21.0827 8.39498C21.0153 8.89173 20.5586 9.2402 20.0617 9.17395L14.6072 8.44668C14.1095 8.38032 13.7598 7.92309 13.8262 7.42541C13.8926 6.92774 14.3498 6.57809 14.8475 6.64445L18.3484 7.11124C16.8702 5.25663 14.5726 4.09064 12 4.09064C7.50208 4.09064 3.81818 7.77454 3.81818 12.2725C3.81818 12.7745 3.41117 13.1816 2.90909 13.1816C2.40701 13.1816 2 12.7745 2 12.2725C2 6.77038 6.49792 2.27246 12 2.27246C15.0381 2.27246 17.7813 3.61127 19.6033 5.77412L20.0083 2.78705C20.0757 2.28953 20.5338 1.94089 21.0313 2.00835Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                <path d="M22 12.2733C22 11.7713 21.5929 11.3643 21.0909 11.3643C20.5888 11.3643 20.1818 11.7713 20.1818 12.2733C20.1818 16.7713 16.4979 20.4552 12 20.4552C9.42714 20.4552 7.12925 19.2889 5.6511 17.434L9.15251 17.9009C9.65018 17.9672 10.1074 17.6176 10.1738 17.1199C10.2401 16.6222 9.89048 16.165 9.39281 16.0986L3.93826 15.3714C3.44137 15.3051 2.98462 15.6536 2.91726 16.1503L2.18999 21.514C2.12253 22.0115 2.47117 22.4695 2.96869 22.537C3.46621 22.6044 3.92423 22.2558 3.99169 21.7583L4.39665 18.7716C6.21865 20.9345 8.96182 22.2733 12 22.2733C17.502 22.2733 22 17.7754 22 12.2733Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                            </svg>
                            </div>
                            <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="9f92c9aa-4331-4047-90c8-343c53684e03">Xóa bộ lọc</div>
                        </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="43c882bf-de3b-4df8-a7d2-ae2633c56175">
                                <div className="w-svg wbaseItem-value" level={8} cateid={115} id="576af019-a305-4981-81a3-3d1ec35014e7"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.0432 16.3052C13.6693 17.4041 11.9267 18.0612 10.0306 18.0612C5.59543 18.0612 2 14.4658 2 10.0306C2 5.59543 5.59543 2 10.0306 2C14.4658 2 18.0612 5.59543 18.0612 10.0306C18.0612 11.9268 17.4041 13.6694 16.3051 15.0433L21.9999 20.7381L20.738 22L15.0432 16.3052ZM3.78458 10.0306C3.78458 6.58103 6.58103 3.78458 10.0306 3.78458C13.4802 3.78458 16.2767 6.58103 16.2767 10.0306C16.2767 11.7129 15.6116 13.2399 14.53 14.3629L14.3629 14.53C13.2399 15.6116 11.7129 16.2767 10.0306 16.2767C6.58103 16.2767 3.78458 13.4802 3.78458 10.0306Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                                </svg>
                                </div>
                                <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="ad0d8132-2bc5-4452-9806-ad9bb4ff55a0">Tìm kiếm</div>
                            </button></div>
                    </form>
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="b09ee126-5556-47dd-aaf4-6ce73ce3b3fc">
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="d0c3844a-a8a9-474c-a348-56d898fd2938">
                            <div className="w-text wbaseItem-value" level={7} cateid={139} id="c7305b9b-b3bb-4dba-ad36-054c86c05ba5">Danh sách kết quả</div>
                        </div>
                        <table className="w-table wbaseItem-value" type={0} name-field="Table" level={6} cateid={117} id="38f049fc-43eb-4d1f-9dec-130566885648">
                            <tbody><tr className="table-row">
                                <td id="1x1" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="7b576021-5939-4b73-9d70-3056aee7d9cf">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="9f9acaea-71e4-41d1-803a-5080c6e42725">STT</div>
                                    </div>
                                </td>
                                <td id="1x2" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="56978d93-cf87-4a63-aa8e-a51551225dac">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="e2827725-4a02-4b60-a3d4-10fe0208f6b4">Mã hồ sơ</div>
                                    </div>
                                </td>
                                <td id="1x3" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="31302bf3-e1e2-4d4c-b273-5b1348f945ba">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="95988b7f-3cbd-42aa-9ab2-e414c4f0eb60">Tên khách hàng</div>
                                    </div>
                                </td>
                                <td id="1x4" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="923ca592-9cfa-46a3-9216-7783fa64ad6a">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="d9106be8-4729-43b4-ba4a-02fa5db1d63d">Số CCCD</div>
                                    </div>
                                </td>
                                <td id="1x5" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="f298068f-7176-4a04-a0a8-0bf6c513cd40">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="91b4090d-6140-4903-a392-99b9c975aa68">Số điện thoại</div>
                                    </div>
                                </td>
                                <td id="1x6" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="dc1b66ea-bed3-4612-b61d-e2fea988a10b">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="96de41db-2abd-4015-97ef-edac10fad787">Đại lý</div>
                                    </div>
                                </td>
                                <td id="1x7" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="63d1e8f9-b58e-4a38-bfde-c16503fc5296">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="5437afeb-8247-4357-9848-d0bac150c942">Số CIF</div>
                                    </div>
                                </td>
                                <td id="1x8" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="35dd29ba-f39d-4bfe-bf56-50ad55b0c3c6">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="a7f2ac68-2991-41e8-8235-fa231a3c606a">Số hợp đồng</div>
                                    </div>
                                </td>
                                <td id="1x9" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="48c5bba5-d20c-49c2-99b0-b4cec5bb96a6">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="1adf63a1-546d-4d23-96d9-8495e3a81540">Trạng thái</div>
                                    </div>
                                </td>
                            </tr>
                                {data?.content != null &&
                                    data.content.map((item, index) => {
                                        return (
                                            <tr key={item.loanApplicationCode} className="table-row">
                                                <td className="2x1 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 98ec5311-9f0d-425d-afe3-c87feefc54d1" wrap="nowrap" level={7} cateid={140}>
                                                        <div className="w-text wbaseItem-value 10946856-eebe-4183-beb4-605fecc6823c" level={8} cateid={139}>{index + 1}</div>
                                                    </div>
                                                </td>
                                                <td className="2x2 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row a4ae2cff-4b30-48a8-b090-40cc14d9862d" wrap="nowrap" level={7} cateid={140}>
                                                        <NavLink
                                                            to={FileStatus.navigation_router(item.status.id, location.pathname)}
                                                            className="nav-link w-text wbaseItem-value b9c0a392-4d2a-4c0e-a474-bde91b6049b2" level={8} cateid={139}
                                                        >
                                                            {item.loanApplicationCode}
                                                        </NavLink>
                                                    </div>
                                                </td>
                                                <td className="2x3 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 8feb538c-a60a-47c1-87f8-6e54a70c0d0a" wrap="nowrap" level={7} cateid={140} >
                                                        <div className="w-text wbaseItem-value 30f816f1-667e-41ce-8454-61e71627d92e" level={8} cateid={139}>{item.customerName}</div>
                                                    </div>
                                                </td>
                                                <td className="2x4 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 2a1220ba-fbd4-4289-b159-a4c6f4e74a85" wrap="nowrap" level={7} cateid={140}>
                                                        <div className="w-text wbaseItem-value 9d314aae-0637-42e7-8e5e-2818bdb10327" level={8} cateid={139}>{item.citizenId}</div>
                                                    </div>
                                                </td>
                                                <td className="2x5 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row c17301ed-9169-4061-9d44-f11a275fca46" wrap="nowrap" level={7} cateid={140}>
                                                        <div className="w-text wbaseItem-value acde444e-221b-4ea8-85cf-e5e90c044ce3" level={8} cateid={139}>{item.phoneNumber}</div>
                                                    </div>
                                                </td>
                                                <td className="2x6 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 66a076b7-83f1-425e-8ca1-0d8a8b32ccc4" wrap="nowrap" level={7} cateid={140} >
                                                        <div className="w-text wbaseItem-value 11008127-90a0-4f0f-8cb5-dcc3f9fcdec9" level={8} cateid={139}>{item.dealerInfo.dealerName}</div>
                                                    </div>
                                                </td>
                                                <td className="2x7 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 7f368fa4-4e75-45f4-8d85-90943007207b" wrap="nowrap" level={7} cateid={140}>
                                                        <div className="w-text wbaseItem-value 2ed170c9-5bb9-4345-bb8e-f986c2c0dc4e" level={8} cateid={139}>{item.cif}</div>
                                                    </div>
                                                </td>
                                                <td className="2x8 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 883e9fd0-2732-46f4-95ee-0ab93fdbf4c5" wrap="nowrap" level={7} cateid={140}>
                                                        <div className="w-text wbaseItem-value 274ad201-4d7d-455b-b156-6c9141e5622c" level={8} cateid={139}>{item.contractNumber}</div>
                                                    </div>
                                                </td>
                                                <td className="2x9 table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 9d0647eb-9f85-42ac-bb40-5388f42fda2a" wrap="nowrap" level={7} cateid={140}>
                                                        {FileStatus.get_status(item.status.id)}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="4785c249-c03c-47df-b877-1fdca84756be">
                            <div className="w-text wbaseItem-value" level={7} cateid={139} id="113a7120-6107-4e22-8115-0f4568f5c6da">Hiển thị 1-{data?.totalElements} trong tổng số {data?.totalElements} bản ghi</div>
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="aee4ce31-7e97-41eb-88da-2a6e505cf12e">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="40d8b31e-ee8d-46d9-a596-71cc4edc3d2a">
                                    <div className="w-text wbaseItem-value" level={9} cateid={139} id="28bff8a7-e7c1-4989-963d-13b2d75d6da5">Items/page</div>
                                    <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={9} cateid={85} id="fbc38ba1-b75f-4d23-bfe8-5054f5a08da5" placeholder={10}>
                                        <div className="wbaseItem-value" name-field="Textfield" level={10} cateid={86} id="5aa0d95c-4ed3-45e8-b034-5471932eceb4">
                                            <div className="textfield">
                                                <input id="textfield-5aa0d95c-4ed3-45e8-b034-5471932eceb4" name="Textformfield" placeholder={10} />
                                            </div>
                                        </div>
                                        <div className="w-svg wbaseItem-value" level={10} cateid={115} id="4eeb2711-e46f-4798-9774-a39bd42cfe86">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="ae0cee64-32be-4aac-8d23-a1a9b99ca65f">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="ab813f13-3d12-48e9-8045-1e3b2c696bcf">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="8053781c-7ba7-44ea-b6d8-403034c113b2">Previous</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="ad22dbf5-4aec-40bf-a146-1ff2f235719d">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="0b3b178e-4d29-418c-a9c4-600233d09b67">1</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="f9f9ac07-fc56-41e0-a88f-6c3a5abae6ed">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="7f401cba-b04a-45d0-91cd-d43a40f4e0d6">2</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="e065e01c-01e3-49a5-95ba-28871b366078">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="65bc491c-0584-427f-a992-23baa329ee83">3</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="9783c4ba-20a8-4459-9a5d-2e8bf1627124">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="91ed4661-eb63-4301-9207-c50cc96283e8">4</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="4821a7fd-1634-491e-8bf2-178f8d49edd5">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="ba01e2ad-ef52-484f-9161-478cb09fb42b">...</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="a94bc999-afa7-426d-87b6-c92fed57bf06">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="9664800f-05bd-4e12-b36f-794e6eb8685f">5</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="c756b422-6f49-4b17-abf2-eb51187df665">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="c1022c40-ba0d-4fc9-ac4f-8198993c607d">50</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="ff1a2a20-a3b9-4a47-98b5-7f235de72c6f">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="8233d24b-7b6b-4fc4-83c3-b98e9fd172ed">Next</div>
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