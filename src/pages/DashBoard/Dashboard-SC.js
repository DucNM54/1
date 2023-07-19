import '../../css/Dashboard-SC.css';
import { NavLink } from 'react-router-dom';

import '../../core/handleData.js';

export default function DashboardSC() {
    return (
        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={2} cateid={140} id="9e2a330b-39c5-4dc3-813a-e3375a979889">
            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" scroll="true" level={3} cateid={140} id="b74fee01-f6ec-4225-9a5d-24e1b513b0c6">
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={4} cateid={140} id="9d27fb35-0c5d-4ec1-a5b9-b43351b9714b">
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="f608fc52-c623-43dc-bdec-557fdc9292e5">
                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={6} cateid={140} id="b24a52a7-3a80-4e26-9838-9822757e1b01">
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="9df8bf7d-3871-4530-9725-3e782e213fd5">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="6410dfce-f8cd-45d0-9e83-c78a00428aeb">Dashboard</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="fe4fac67-a306-4325-b506-04f7c1ca0703">
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="26de704c-c861-4b77-ac60-da7eff886be6">
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="9dca49c6-2b97-4e2d-bea9-1caa37360a72">
                                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="ca269ae9-a5ce-438e-93ea-844bbc33a24b">
                                    <div className="w-text wbaseItem-value" level={9} cateid={139} id="f772e855-0ac8-4f07-a01f-8c775084921e">Thời gian thống kê hồ sơ vay</div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="bb256867-9475-4b2f-b0d4-6a5f0f2a5407">
                                        <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={10} cateid={85} id="2300f33c-5926-4d2e-b99f-04c18b656337" placeholder='Từ ngày'>
                                            <div className="wbaseItem-value" name-field="Textfield" level={11} cateid={86} id="61e78368-3c9d-46a6-9487-14d25cc28fea" type="date">
                                                <div className="textfield"><input id="textfield-61e78368-3c9d-46a6-9487-14d25cc28fea" name="Textformfield" placeholder="Từ ngày" /></div>
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
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="3a205db0-5634-4815-926e-342762016e79">-</div>
                                        <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={10} cateid={85} id="b4ebd7b2-0d57-4ed3-8894-0ab6ce9c1754" placeholder="Đến ngày">
                                            <div className="wbaseItem-value" name-field="Textfield" level={11} cateid={86} id="8aaa8672-8992-4e6c-9d94-db763a887822" type="date">
                                                <div className="textfield"><input id="textfield-8aaa8672-8992-4e6c-9d94-db763a887822" name="Textformfield" placeholder="Đến ngày" /></div>
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
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="001e260a-16ac-4a28-922c-7c99ec1fc3f8"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={8} cateid={29} id="d24e8d67-cf34-4e77-8ec3-1525c965c6ba">
                                <div className="w-svg wbaseItem-value" level={9} cateid={115} id="8dbff10d-48fc-4c7f-936c-1885ab0f8146"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0313 2.00835C21.5288 2.07581 21.8774 2.53382 21.81 3.03135L21.0827 8.39498C21.0153 8.89173 20.5586 9.2402 20.0617 9.17395L14.6072 8.44668C14.1095 8.38032 13.7598 7.92309 13.8262 7.42541C13.8926 6.92774 14.3498 6.57809 14.8475 6.64445L18.3484 7.11124C16.8702 5.25663 14.5726 4.09064 12 4.09064C7.50208 4.09064 3.81818 7.77454 3.81818 12.2725C3.81818 12.7745 3.41117 13.1816 2.90909 13.1816C2.40701 13.1816 2 12.7745 2 12.2725C2 6.77038 6.49792 2.27246 12 2.27246C15.0381 2.27246 17.7813 3.61127 19.6033 5.77412L20.0083 2.78705C20.0757 2.28953 20.5338 1.94089 21.0313 2.00835Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                    <path d="M22 12.2733C22 11.7713 21.5929 11.3643 21.0909 11.3643C20.5888 11.3643 20.1818 11.7713 20.1818 12.2733C20.1818 16.7713 16.4979 20.4552 12 20.4552C9.42714 20.4552 7.12925 19.2889 5.6511 17.434L9.15251 17.9009C9.65018 17.9672 10.1074 17.6176 10.1738 17.1199C10.2401 16.6222 9.89048 16.165 9.39281 16.0986L3.93826 15.3714C3.44137 15.3051 2.98462 15.6536 2.91726 16.1503L2.18999 21.514C2.12253 22.0115 2.47117 22.4695 2.96869 22.537C3.46621 22.6044 3.92423 22.2558 3.99169 21.7583L4.39665 18.7716C6.21865 20.9345 8.96182 22.2733 12 22.2733C17.502 22.2733 22 17.7754 22 12.2733Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                </svg>
                                </div>
                                <div className="w-text wbaseItem-value" name-field="Text" level={9} cateid={139} id="45c56078-bb54-4881-a964-29981cf86b11">Xóa bộ lọc</div>
                            </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={8} cateid={29} id="721005a5-77d1-4c1a-975f-728962c32ae4">
                                    <div className="w-svg wbaseItem-value" level={9} cateid={115} id="7bde43eb-4040-4b30-a185-4512a1d5a7a9"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.0432 16.3052C13.6693 17.4041 11.9267 18.0612 10.0306 18.0612C5.59543 18.0612 2 14.4658 2 10.0306C2 5.59543 5.59543 2 10.0306 2C14.4658 2 18.0612 5.59543 18.0612 10.0306C18.0612 11.9268 17.4041 13.6694 16.3051 15.0433L21.9999 20.7381L20.738 22L15.0432 16.3052ZM3.78458 10.0306C3.78458 6.58103 6.58103 3.78458 10.0306 3.78458C13.4802 3.78458 16.2767 6.58103 16.2767 10.0306C16.2767 11.7129 15.6116 13.2399 14.53 14.3629L14.3629 14.53C13.2399 15.6116 11.7129 16.2767 10.0306 16.2767C6.58103 16.2767 3.78458 13.4802 3.78458 10.0306Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                                    </svg>
                                    </div>
                                    <div className="w-text wbaseItem-value" name-field="Text" level={9} cateid={139} id="d2072366-492e-4217-b5f2-d8ac1accf482">Tìm kiếm</div>
                                </button></div>
                        </div>
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="d5639b51-3f7e-46d8-8c48-8231a7623330">
                            <div className="w-text wbaseItem-value" level={7} cateid={139} id="625a42df-7657-45b0-a269-151debbe64b3">Thống kê hồ sơ vay</div>
                        </div>
                        <table className="w-table wbaseItem-value" type={0} name-field="Table" level={6} cateid={117} id="8fdbdbca-2020-4df6-8ca7-41b500a9d214">
                            <tbody><tr className="table-row">
                                <td id="1x1" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="efc4542e-a514-4053-bc6a-f214667426a9">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="ea3851af-3ee3-471b-bb1d-97f26855228c">Trạng thái hồ sơ</div>
                                    </div>
                                </td>
                                <td id="1x2" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="29b308b3-45d3-44cd-acdd-c6e7261d9e49">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="b44c491d-ac09-4aa2-8107-0bd4597c4e65">Số lượng</div>
                                    </div>
                                </td>
                            </tr>
                                <tr className="table-row">
                                    <td id="2x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="c3361d3d-207e-40bb-aef8-7964fc53f9eb">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="f7b13587-46cf-4b00-a580-b2a337235bae">Hồ sơ cần xử lý</div>
                                        </div>
                                    </td>
                                    <td id="2x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="05704106-9185-4af6-a90d-d0f84e0404bc">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="2932ccd3-c2cc-42f8-a041-80ed1a9d5876">2</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td id="3x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="29930f6b-ae45-4b87-bc47-a93157d13ae6">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="d6fe010a-3901-4fb6-9f37-87c0b5459c93">Hồ sơ đã giải ngân</div>
                                        </div>
                                    </td>
                                    <td id="3x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="1462b106-7d8c-48c1-8fc9-0bebf59e519a">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="8c7cca3c-632c-46b0-88e8-9f31525fc0aa">2</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td id="4x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="859a6887-e2a4-48a0-af08-f4532f43b7fa">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="6c151ede-3707-446f-a9a4-1c829a9eb2f0">Hồ sơ chờ giải ngân</div>
                                        </div>
                                    </td>
                                    <td id="4x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="27fb99ba-e681-4eb2-8557-73def79c4616">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="44e80a4c-c8c3-40be-912c-916819425063">2</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td id="5x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="5af81d08-ca25-44d4-9a65-e21f665bf827">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="7547cd7f-60eb-4929-bebf-9acab952e075">Hồ sơ bị từ chối</div>
                                        </div>
                                    </td>
                                    <td id="5x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="a3902c9b-e3b2-40da-aac4-afffc094acee">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="58a71a27-4074-414d-a18d-4a7d4f3aa3c1">2</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody></table>
                    </div>
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="f9ab83b2-ae90-4087-9562-f0927284dcea">
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="a0c8b6ca-cad4-4cb4-a800-8936b56a2a1c">
                            <div className="w-text wbaseItem-value" level={7} cateid={139} id="81d5df79-eee8-485b-8d40-5367d443b53a">Thống kê công việc</div>
                        </div>
                        <table className="w-table wbaseItem-value" type={0} name-field="Table" level={6} cateid={117} id="063ab594-f765-47bb-8b48-222608c56de0">
                            <tbody><tr className="table-row">
                                <td id="1x1" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="5576d149-7258-4343-9c75-73d7476e4450">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="26bb6ca7-37e2-4121-ac31-d2aec5deed22">Trạng thái hồ sơ</div>
                                    </div>
                                </td>
                                <td id="1x2" className="table-cell" rowSpan={1} colSpan={1}>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="2e21ec15-81ac-4036-8f5b-2afcae5328f4">
                                        <div className="w-text wbaseItem-value" level={8} cateid={139} id="989dcacd-ddab-4c96-9dd0-8cb719960a18">Số lượng</div>
                                    </div>
                                </td>
                            </tr>
                                <tr className="table-row">
                                    <td id="2x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="9633ff1b-f66b-4a7c-b7ba-e32aca608696">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="a31e1669-33f0-43d0-a296-a42ea11c5ff3">Hồ sơ đăng ký tư vấn cần xử lý</div>
                                        </div>
                                    </td>
                                    <td id="2x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="e65b942d-5e63-437e-84ad-7d1537598c47">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="6613e81e-060d-4aa6-9d32-098e65624af2">2</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td id="3x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="78b17285-6d99-4be8-bfdb-c42a2f44b18b">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="07e9f6cd-9dbc-49a6-b730-0d7863f95f02">Hồ sơ khởi tạo mới cần xử lý</div>
                                        </div>
                                    </td>
                                    <td id="3x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="5d1e7b8a-f143-45cb-bbaf-a66078479045">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="a9cf209e-519d-451b-ad8b-4177bf09bc13">2</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td id="4x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="0f837fd3-81c8-4699-9532-3b6090ace647">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="8f207dab-a00d-49e7-b836-6d24ba14a341">Hồ sơ chờ bổ sung thẩm định</div>
                                        </div>
                                    </td>
                                    <td id="4x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="85de193f-0cc3-4294-b63d-8c56c16ce14c">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="02005889-c5d2-4a1f-8eb6-34be31b763ac">2</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td id="5x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="3f86f70d-cbff-4617-bb52-612bd33ec776">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="5fa347c3-ed82-41fb-9637-5d8fdd50631e">Hồ sơ đã phê duyệt</div>
                                        </div>
                                    </td>
                                    <td id="5x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="7209f66d-c24e-476e-b37c-7df2daf5b228">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="18a69912-849a-4e77-bb9a-0d4ba96dd1b0">2</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td id="6x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="321f7442-305d-4e07-ae74-81cd4df879a2">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="3f49164a-4502-4797-b4c4-7bc0bd4d1abd">Hồ sơ chờ bổ sung giải ngân</div>
                                        </div>
                                    </td>
                                    <td id="6x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="8921127c-a296-447a-888f-cdb902facf4a">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="6e6821c0-271a-4d8b-8f0d-f1d4daaa93c8">2</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td id="7x1" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="4beaf2d5-027c-4a3e-8fef-3bfd8bc76ede">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="ac14f2fa-ef07-4965-9d70-cd4ad997ef4e">Tổng số</div>
                                        </div>
                                    </td>
                                    <td id="7x2" className="table-cell" rowSpan={1} colSpan={1}>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="f499966f-0222-405f-9571-114a4d35fc08">
                                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="4993cf4e-8c8f-414f-97e9-0de4579c15a8">2</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>
        </div>
    );
}