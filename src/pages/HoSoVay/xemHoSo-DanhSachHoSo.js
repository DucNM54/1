import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, } from 'react';

import '../../css/xemHoSo-DanhSachHoSoVay.css';
import '../../css/popup-trang-thai.css';

import { FileStatus } from '../../const/file-status';

export default function DanhSachHoSoVay() {
    const location = useLocation();
    // const size = 10;
    // const [page, setPage] = useState(1);
    // const [data, setData] = useState([]);
    const data = [
        { loanApplicationCode: "0000000", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
        { loanApplicationCode: "0000001", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
        { loanApplicationCode: "0000002", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
        { loanApplicationCode: "0000003", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
        { loanApplicationCode: "0000004", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
        { loanApplicationCode: "0000005", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
        { loanApplicationCode: "0000006", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
        { loanApplicationCode: "0000007", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
        { loanApplicationCode: "0000008", customerName: "Nguyễn Minh Đức", citizenId: "1234567890", phoneNumber: "0988977403", dealerInfo: "Hà Nội", cif: "1234567890", contractNumber: "1234567890", status: FileStatus.KHOI_TAO_HO_SO },
    ];
    useEffect(() => {
        // const get_listFile = async (pageIndex) => {
        //     try {
        //         // const response = await fetch('https://example.com/path/to/file.txt');
        //     } catch (error) {
        //         console.error('Failed to fetch file:', error);
        //     }
        // };
        // get_listFile(1);
    }, []);


    return (
        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" scroll="true" level={3} cateid={140} id="38c168f4-8a1e-4d81-b885-52190db05fc2">
            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={4} cateid={140} id="daf24bbb-6d2f-4afd-a825-846edc3ba848">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="682dc2bf-6931-4f5c-96b6-fb609740cb49">
                    <div className="w-text wbaseItem-value" level={6} cateid={139} id="3a1665dc-1f18-4e37-8aa6-46bc7d31b173">Danh sách hồ sơ vay</div>
                </div>
                <form className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="0d396127-17e0-4168-86e4-3bf43072d3bc">
                    <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={6} cateid={140} id="39cc77d3-b7d8-4cad-9dcd-a43defd802aa">
                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="933ad284-c1e3-46d8-b325-f92620c748aa">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="f3da10ab-13bb-4359-9178-631177f613e1">Tên khách hàng</div>
                            <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="67d72a86-97d3-4baf-ba14-1c334e80a2e9" placeholder="Nhập tên khách hàng">
                                <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="387ef92f-6d98-498a-be5b-bf6ce35c494b">
                                    <div className="textfield">
                                        <input id="textfield-387ef92f-6d98-498a-be5b-bf6ce35c494b" name="Textformfield" placeholder="Nhập tên khách hàng" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="0da863ac-8eb4-4307-8403-d153c93180d7">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="e3e15f19-6e87-4890-b2a2-644c4a6330be">Số CCCD</div>
                            <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="1d968320-3d6f-4922-a829-0b7f076d0ade" placeholder="Nhập tên số cccd">
                                <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="15d0084e-2d0d-45ab-8bbb-48812d353181">
                                    <div className="textfield"><input id="textfield-15d0084e-2d0d-45ab-8bbb-48812d353181" name="Textformfield" placeholder="Nhập tên số CCCD" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="d554494f-b1d7-4659-ae0a-07772eaa1198">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="2e96dda5-a18a-4a92-976f-9b2bea22d2b4">Số điện thoại</div>
                            <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="f5e5714d-c5a0-460f-a23b-bb222043efdf" placeholder="Nhập số điện thoại">
                                <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="75aafb04-c585-4a30-b30d-e8b1fb55ccf4">
                                    <div className="textfield"><input id="textfield-75aafb04-c585-4a30-b30d-e8b1fb55ccf4" name="Textformfield" placeholder="Nhập số điện thoại" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="c4cae973-56dc-405c-83dc-efc5d7257d44">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="8e97eca0-bf47-42f9-a3ad-a84d49f2f52c">Đại lý</div>
                            <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="44c1aa2a-0dbf-45e2-ab80-6e6ae31fb7c9" placeholder="Chọn đại lý">
                                <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="f0adf7f3-6ebd-4894-8441-bc52b3b1c098">
                                    <div className="textfield"><input id="textfield-f0adf7f3-6ebd-4894-8441-bc52b3b1c098" name="Textformfield" placeholder="Chọn đại lý" /></div>
                                </div>
                                <div className="w-svg wbaseItem-value" level={9} cateid={115} id="a1f62e97-0e2e-42d7-b080-c458f595c1aa"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="a8399d21-8ff3-419c-9f89-6d1d2c0a53d2">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="41f26a60-84fb-45ef-a648-22147bb433ea">Mã hồ sơ</div>
                            <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="86233a0d-56df-44c6-9d9c-366d7db13ea0" placeholder="Nhập mã hồ sơ">
                                <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="ec6955b3-4d83-4441-bc8c-0e0f3da1f05b">
                                    <div className="textfield"><input id="textfield-ec6955b3-4d83-4441-bc8c-0e0f3da1f05b" name="Textformfield" placeholder="Nhập mã hồ sơ" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="fe59fa59-6e10-4270-ac8b-b4456b3b9493">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="c0fc4bf1-2319-4a82-bd58-afa9c11a25e0">Số cif</div>
                            <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="c5b6a849-bca2-4d2e-bd25-2606bd137607" placeholder="Nhập số cif">
                                <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="1f4bb9b1-8471-4c0e-9ed5-c5417d4b2e6b">
                                    <div className="textfield"><input id="textfield-1f4bb9b1-8471-4c0e-9ed5-c5417d4b2e6b" name="Textformfield" placeholder="Nhập số cif" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="5ad848f4-b1cc-4731-9824-046694f12691">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="3f520c45-fde3-4875-adba-c6369e2cd64d">Số hợp đồng</div>
                            <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="b1572b48-a222-4587-931c-2612c8b74034" placeholder="Nhập số hợp đồng">
                                <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="d0a31903-768d-480c-92c0-61268ba62af9">
                                    <div className="textfield"><input id="textfield-d0a31903-768d-480c-92c0-61268ba62af9" name="Textformfield" placeholder="Nhập số hợp đồng" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col24 col24-sm" wrap="nowrap" level={7} cateid={140} id="a2cf6141-fd42-43ac-b534-d17e5b959f00">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="a1144caa-ec36-4ac8-a93b-c5339705ffd3">Trạng thái</div>
                            <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={8} cateid={85} id="a403d152-c0ea-4394-bdca-2c94c5347a01" placeholder="Trạng thái">
                                <div className="wbaseItem-value" name-field="Textfield" level={9} cateid={86} id="fb89e567-72a3-44a1-a483-1c42c5f1dd1b">
                                    <div className="textfield"><input id="textfield-fb89e567-72a3-44a1-a483-1c42c5f1dd1b" name="Textformfield" placeholder="Trạng thái" /></div>
                                </div>
                                <div className="w-svg wbaseItem-value" level={9} cateid={115} id="c856f394-65b3-41cf-9713-0c9ad319585c"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={7} cateid={140} id="da4cf8c3-311f-4580-8b87-6709f8160053">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="ad483c96-1a4e-4eda-ac8d-9360ed0e6722">Thời gian tạo hồ sơ</div>
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="676792c9-5f4a-45bd-88ce-db3e2dd536a0">
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={9} cateid={85} id="54e5d651-53d5-43d6-b61d-ffa9b01c9bd3" placeholder="Từ ngày">
                                    <div className="wbaseItem-value" name-field="Textfield" level={10} cateid={86} id="d37be69e-c37b-4962-9031-b8ea9938843d" type="date">
                                        <div className="textfield"><input id="textfield-d37be69e-c37b-4962-9031-b8ea9938843d" name="Textformfield" placeholder="Từ ngày" /></div>
                                        <div className="suffix-btn-txtfd calendar-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="95%" viewBox="0 0 17 16" fill="none">
                                            <path d="M12.3876 2.99967V1.88856C12.3876 1.74122 12.3291 1.59991 12.2249 1.49573C12.1207 1.39154 11.9794 1.33301 11.832 1.33301C11.6847 1.33301 11.5434 1.39154 11.4392 1.49573C11.335 1.59991 11.2765 1.74122 11.2765 1.88856V2.99967H12.3876Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M5.72092 2.99967V1.88856C5.72092 1.74122 5.66239 1.59991 5.5582 1.49573C5.45401 1.39154 5.31271 1.33301 5.16536 1.33301C5.01802 1.33301 4.87671 1.39154 4.77253 1.49573C4.66834 1.59991 4.60981 1.74122 4.60981 1.88856V2.99967H5.72092Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M13.4987 14.1108H3.4987C3.05667 14.1108 2.63275 13.9352 2.32019 13.6226C2.00763 13.3101 1.83203 12.8861 1.83203 12.4441V5.2219C1.83203 4.77987 2.00763 4.35595 2.32019 4.04339C2.63275 3.73082 3.05667 3.55523 3.4987 3.55523H13.4987C13.9407 3.55523 14.3646 3.73082 14.6772 4.04339C14.9898 4.35595 15.1654 4.77987 15.1654 5.2219V12.4441C15.1654 12.8861 14.9898 13.3101 14.6772 13.6226C14.3646 13.9352 13.9407 14.1108 13.4987 14.1108ZM14.0543 6.33301H2.94314V12.4441C2.94314 12.5915 3.00167 12.7328 3.10586 12.837C3.21005 12.9411 3.35136 12.9997 3.4987 12.9997H13.4987C13.646 12.9997 13.7873 12.9411 13.8915 12.837C13.9957 12.7328 14.0543 12.5915 14.0543 12.4441V6.33301Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M6.27648 7.44412H4.05425V9.11079H6.27648V7.44412Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M9.60981 7.44412H7.38759V9.11079H9.60981V7.44412Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M6.27648 10.2219H4.05425V11.8886H6.27648V10.2219Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M9.60981 10.2219H7.38759V11.8886H9.60981V10.2219Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M12.9431 7.44412H10.7209V9.11079H12.9431V7.44412Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                        </svg></div>
                                    </div>
                                </div>
                                <div className="w-text wbaseItem-value" level={9} cateid={139} id="ebfc245d-bfc0-4f47-9b0c-d7fd80a8e9b6">-</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={9} cateid={85} id="e6b07ff0-db76-400a-835f-1c9671ea0e1c" placeholder="Đến ngày">
                                    <div className="wbaseItem-value" name-field="Textfield" level={10} cateid={86} id="6da7e7b2-aded-438e-b121-5127229e93c0" type="date" >
                                        <div className="textfield"><input id="textfield-6da7e7b2-aded-438e-b121-5127229e93c0" name="Textformfield" placeholder="Đến ngày" /></div>
                                        <div className="suffix-btn-txtfd calendar-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="95%" viewBox="0 0 17 16" fill="none">
                                            <path d="M12.3876 2.99967V1.88856C12.3876 1.74122 12.3291 1.59991 12.2249 1.49573C12.1207 1.39154 11.9794 1.33301 11.832 1.33301C11.6847 1.33301 11.5434 1.39154 11.4392 1.49573C11.335 1.59991 11.2765 1.74122 11.2765 1.88856V2.99967H12.3876Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M5.72092 2.99967V1.88856C5.72092 1.74122 5.66239 1.59991 5.5582 1.49573C5.45401 1.39154 5.31271 1.33301 5.16536 1.33301C5.01802 1.33301 4.87671 1.39154 4.77253 1.49573C4.66834 1.59991 4.60981 1.74122 4.60981 1.88856V2.99967H5.72092Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M13.4987 14.1108H3.4987C3.05667 14.1108 2.63275 13.9352 2.32019 13.6226C2.00763 13.3101 1.83203 12.8861 1.83203 12.4441V5.2219C1.83203 4.77987 2.00763 4.35595 2.32019 4.04339C2.63275 3.73082 3.05667 3.55523 3.4987 3.55523H13.4987C13.9407 3.55523 14.3646 3.73082 14.6772 4.04339C14.9898 4.35595 15.1654 4.77987 15.1654 5.2219V12.4441C15.1654 12.8861 14.9898 13.3101 14.6772 13.6226C14.3646 13.9352 13.9407 14.1108 13.4987 14.1108ZM14.0543 6.33301H2.94314V12.4441C2.94314 12.5915 3.00167 12.7328 3.10586 12.837C3.21005 12.9411 3.35136 12.9997 3.4987 12.9997H13.4987C13.646 12.9997 13.7873 12.9411 13.8915 12.837C13.9957 12.7328 14.0543 12.5915 14.0543 12.4441V6.33301Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M6.27648 7.44412H4.05425V9.11079H6.27648V7.44412Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M9.60981 7.44412H7.38759V9.11079H9.60981V7.44412Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M6.27648 10.2219H4.05425V11.8886H6.27648V10.2219Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M9.60981 10.2219H7.38759V11.8886H9.60981V10.2219Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                            <path d="M12.9431 7.44412H10.7209V9.11079H12.9431V7.44412Z" fill="#282829" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                        </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="61231b06-e15f-4052-a97b-988e1d9d6f04"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="c1c4746d-ea95-4703-af5c-51ef19e12e70">
                        <div className="w-svg wbaseItem-value" level={8} cateid={115} id="03447d1b-e6da-40c7-9734-c02778c5f086"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.0313 2.00835C21.5288 2.07581 21.8774 2.53382 21.81 3.03135L21.0827 8.39498C21.0153 8.89173 20.5586 9.2402 20.0617 9.17395L14.6072 8.44668C14.1095 8.38032 13.7598 7.92309 13.8262 7.42541C13.8926 6.92774 14.3498 6.57809 14.8475 6.64445L18.3484 7.11124C16.8702 5.25663 14.5726 4.09064 12 4.09064C7.50208 4.09064 3.81818 7.77454 3.81818 12.2725C3.81818 12.7745 3.41117 13.1816 2.90909 13.1816C2.40701 13.1816 2 12.7745 2 12.2725C2 6.77038 6.49792 2.27246 12 2.27246C15.0381 2.27246 17.7813 3.61127 19.6033 5.77412L20.0083 2.78705C20.0757 2.28953 20.5338 1.94089 21.0313 2.00835Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                            <path d="M22 12.2733C22 11.7713 21.5929 11.3643 21.0909 11.3643C20.5888 11.3643 20.1818 11.7713 20.1818 12.2733C20.1818 16.7713 16.4979 20.4552 12 20.4552C9.42714 20.4552 7.12925 19.2889 5.6511 17.434L9.15251 17.9009C9.65018 17.9672 10.1074 17.6176 10.1738 17.1199C10.2401 16.6222 9.89048 16.165 9.39281 16.0986L3.93826 15.3714C3.44137 15.3051 2.98462 15.6536 2.91726 16.1503L2.18999 21.514C2.12253 22.0115 2.47117 22.4695 2.96869 22.537C3.46621 22.6044 3.92423 22.2558 3.99169 21.7583L4.39665 18.7716C6.21865 20.9345 8.96182 22.2733 12 22.2733C17.502 22.2733 22 17.7754 22 12.2733Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                        </svg>
                        </div>
                        <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="34a79573-fdde-4a8a-8933-3e69eb0f45ce">Xóa bộ lọc</div>
                    </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="cdc656f8-cffe-482a-b878-f99acf3ed257">
                            <div className="w-svg wbaseItem-value" level={8} cateid={115} id="25e705e7-65bd-4a36-9b8b-a6c96a8f48c7"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0432 16.3052C13.6693 17.4041 11.9267 18.0612 10.0306 18.0612C5.59543 18.0612 2 14.4658 2 10.0306C2 5.59543 5.59543 2 10.0306 2C14.4658 2 18.0612 5.59543 18.0612 10.0306C18.0612 11.9268 17.4041 13.6694 16.3051 15.0433L21.9999 20.7381L20.738 22L15.0432 16.3052ZM3.78458 10.0306C3.78458 6.58103 6.58103 3.78458 10.0306 3.78458C13.4802 3.78458 16.2767 6.58103 16.2767 10.0306C16.2767 11.7129 15.6116 13.2399 14.53 14.3629L14.3629 14.53C13.2399 15.6116 11.7129 16.2767 10.0306 16.2767C6.58103 16.2767 3.78458 13.4802 3.78458 10.0306Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                            </svg>
                            </div>
                            <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="3b57b10f-1977-41c7-b018-8b04ebfa0309">Tìm kiếm</div>
                        </button></div>
                </form>
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="6fc3473b-5b2a-4f0f-9558-6e9827decde6">
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="33a5efb4-1eef-47e0-905c-fb3a711718a7">
                        <div className="w-text wbaseItem-value" level={7} cateid={139} id="bdaff088-39d1-457b-a08a-7fcafccd3b67">Danh sách kết quả</div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="ebad6782-662a-4b09-82b6-3d8eca96108a">
                            <div className="w-svg wbaseItem-value" level={8} cateid={115} id="0bf7486c-6d01-4d53-8796-8fdd85f749d2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                            </svg>
                            </div>
                            <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="750497bb-7e8e-43b4-9268-1bfb69d199d1">Tải tệp</div>
                        </button>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="06dc382c-c907-4019-8934-aed6983c56c8" scroll="true">
                        <table className="w-table wbaseItem-value" type={0} name-field="Table" level={7} cateid={117} id="513fbb55-8afc-4017-bc72-57ace1f2f8ac">
                            <tbody><tr className="table-row">
                                <td id="1x1" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="444e1f7a-f1a5-4875-ae6b-7f3b2ce6c793">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="97b7c08c-fae7-4665-8034-2ec6f5dbf0fe">STT</div>
                                    </div>
                                </td>
                                <td id="1x2" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="cbadbda7-a781-4f94-953f-013d1d0b6b0e">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="1f60b661-db06-4c3f-8095-3d4314b166cc">Mã hồ sơ</div>
                                    </div>
                                </td>
                                <td id="1x3" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="5557b2b9-de81-499d-9e82-4d7afc2d253a">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="f1595654-efba-413e-9d18-2d331f380168">Tên khách hàng</div>
                                    </div>
                                </td>
                                <td id="1x4" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="2514f372-2223-4946-91c1-757d9c801fdb">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="f0ef63f0-4504-4047-9200-6d3fb5b8a0e1">Số CCCD</div>
                                    </div>
                                </td>
                                <td id="1x5" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="a1911499-1169-4cf6-8bf8-9eeb1a047cb7">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="934fdbd1-0a9f-4df1-bfbd-b2345932aa15">Số điện thoại</div>
                                    </div>
                                </td>
                                <td id="1x6" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="4b44fcb8-26ca-4fcd-9065-f9dd3d4aac91">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="34857b29-2cb5-46b4-ba44-f36289a54257">Đại lý</div>
                                    </div>
                                </td>
                                <td id="1x7" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="a156577a-dd98-4b83-bc34-0aec9bd782dc">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="7f231811-67cc-4a19-bf44-3680e8761ca3">Mã CIF khách hàng</div>
                                    </div>
                                </td>
                                <td id="1x8" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="e632f43a-5f7b-4c0c-aa8d-37a851689dff">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="4cf4aed8-8089-445a-8e41-75875a0c9cf3">Số hợp đồng</div>
                                    </div>
                                </td>
                                <td id="1x9" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="41d159a4-63e0-4dbc-89b7-067f7937c0fc">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="bdc12b52-eb28-43b4-82b4-375299eeab6a">Trạng thái</div>
                                    </div>
                                </td>
                                <td id="1x10" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="83de118a-a038-446f-abc2-93e733b59d64">
                                        <div className="w-text wbaseItem-value" level={9} cateid={139} id="9b28e1a4-caed-49e3-a7e1-1f4f393c89f8">Thời gian tạo hồ sơ</div>
                                    </div>
                                </td>
                            </tr>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr key={item.loanApplicationCode} className="table-row">
                                                <td id='2x1' className="table-cell" rowSpan={1} colSpan={1} >
                                                    <div className="w-frame wbaseItem-value w-row d507600e-2c8b-48c1-ba8c-1e0100b054bc" wrap="nowrap" level={8} cateid={140} >
                                                        <div className="w-text wbaseItem-value 66ec73f7-5060-49e9-a942-bd909a9140bd" level={9} cateid={139} >{index + 1}</div>
                                                    </div>
                                                </td>
                                                <td id='2x2' className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row event-click 709f58f7-b205-44a8-87e5-74b7cab3f7e1" wrap="nowrap" level={8} cateid={140} >
                                                        <NavLink
                                                            to={FileStatus.navigation_router(item.status, location.pathname)}
                                                            className="nav-link w-text wbaseItem-value event-click 09f7dd92-3ed8-4635-9ebb-ccf8ee6c5eb7" level={9} cateid={139}
                                                        >
                                                            {item.loanApplicationCode}
                                                        </NavLink>
                                                    </div>
                                                </td>
                                                <td id='2x3' className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 9887cef5-5577-4484-b6b0-84376f032915" wrap="nowrap" level={8} cateid={140} >
                                                        <div className="w-text wbaseItem-value ff973a2b-dc95-48e2-a90d-87b15f2876e5" level={9} cateid={139} >{item.customerName}</div>
                                                    </div>
                                                </td>
                                                <td id='2x4' className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row c6df5ba8-86e4-4dd6-9f0d-ffe259f64f78" wrap="nowrap" level={8} cateid={140} >
                                                        <div className="w-text wbaseItem-value 7b5e0332-a7d9-434a-b74b-e6c4d39016ee" level={9} cateid={139} >{item.citizenId}</div>
                                                    </div>
                                                </td>
                                                <td id='2x5' className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 9167d9ad-99f2-406d-82ef-b63d8c0c3786" wrap="nowrap" level={8} cateid={140} >
                                                        <div className="w-text wbaseItem-value b1d4dbe5-479b-467c-8847-3bd98d146dab" level={9} cateid={139} >{item.phoneNumber}</div>
                                                    </div>
                                                </td>
                                                <td id='2x6' className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 9a4fa0cb-67f4-4fcf-9dc3-25ab5f957a03" wrap="nowrap" level={8} cateid={140} >
                                                        <div className="w-text wbaseItem-value 39b80cee-d396-4561-8012-877cc3dddfc4" level={9} cateid={139} >{item.dealerInfo}</div>
                                                    </div>
                                                </td>
                                                <td id='2x7' className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row bc8fcd9d-09ff-44fd-81d0-138a9a41cb93" wrap="nowrap" level={8} cateid={140} >
                                                        <div className="w-text wbaseItem-value 8e9de768-283a-4a77-8d9e-0b953946824f" level={9} cateid={139} >{item.cif}</div>
                                                    </div>
                                                </td>
                                                <td id='2x8' className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 9d52232d-bcb8-4611-9c42-a27c58d2b002" wrap="nowrap" level={8} cateid={140} >
                                                        <div className="w-text wbaseItem-value 6f9caf84-83d7-4833-a80d-127e4d414c3d" level={9} cateid={139} >{item.contractNumber}</div>
                                                    </div>
                                                </td>
                                                <td id='2x9' className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 41941a93-c00b-42e4-855c-b359d52d1f5e" wrap="nowrap" level={8} cateid={140} >
                                                        {FileStatus.get_status(item.status)}
                                                    </div>
                                                </td>
                                                <td id='2x10' className=" table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row 2efc4051-1875-4ffc-9811-0117a92fddbc" wrap="nowrap" level={8} cateid={140} >
                                                        <div className="w-text wbaseItem-value 88e6369b-8e2a-4b62-96a8-137ee153578b" level={9} cateid={139} >13/06/2023 15:06</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="52637585-d60b-447c-a873-9df56bc9b2b4">
                        <div className="w-text wbaseItem-value" level={7} cateid={139} id="cee2d49d-a1ab-4570-a72a-ad55b6058e34">Hiển thị 1-10 trong tổng số 100 bản ghi</div>
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="8d1c8cff-610a-4d72-82f2-e948cb1848ec">
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="1b44a252-c5ea-4aff-a72f-031b67a08f3c">
                                <div className="w-text wbaseItem-value" level={9} cateid={139} id="abcbe7b5-579f-40ed-abfc-1adffadeec15">Items/page</div>
                                <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={9} cateid={85} id="5f746375-6816-4c67-b614-6bdbe3fba40a" placeholder={10}>
                                    <div className="wbaseItem-value" name-field="Textfield" level={10} cateid={86} id="3cf6d419-4285-41f8-a6e4-96c1e638de5e">
                                        <div className="textfield"><input id="textfield-3cf6d419-4285-41f8-a6e4-96c1e638de5e" name="Textformfield" placeholder={10} /></div>
                                    </div>
                                    <div className="w-svg wbaseItem-value" level={10} cateid={115} id="c0c50b96-bebc-498d-a05b-c08563929557"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                    </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="26ea5757-01d9-4b5d-8b47-1372849fe2e9">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="c3c3661c-9fe9-4e64-88a2-ce2255412d5d">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="ac5ba8f4-bfbe-4a44-b450-8f6a83ec6e87">Previous</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="cc64fc6a-76c8-4a00-aa99-f289e888566a">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="4be13151-7194-477c-b594-4c8814020714">1</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="637c218f-5895-40bf-a26e-54bd34173a6c">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="c65ed49a-ce8f-4ff1-97aa-187e6849420b">2</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="86d3e5f7-29bd-416b-8bd3-c3e249209a2a">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="3b3066e6-985e-40c2-b7a5-53f3e7ce8b86">3</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="ca2219fb-f4b1-4ac4-9a2e-41ef40afa097">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="6ff6a32b-0a48-4747-8b97-cec9fb864787">4</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="5ccc4489-ec0d-49d8-bafa-0ad53b013b4f">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="c72db0d0-cada-4ded-bf69-4551e32b2229">...</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="0ade2fdf-3983-491d-a3ee-210377eb81b2">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="1f9a6ab3-4465-41ca-af77-6e0c57c1d6fd">5</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="20827044-1186-4a1b-b821-c0d587af66e1">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="5e1279cc-be63-4462-96d5-d2ebb8e3bea1">50</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="3b390a6e-536c-4929-a2bd-1ec0aaa8cbd8">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="91c40fdf-572e-4a22-ac2b-dbb3a979caa9">Next</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}