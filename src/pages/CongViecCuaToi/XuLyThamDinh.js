import { useEffect, useRef } from 'react';
import '../../css/XuLyThamDinh.css';
import $ from "jquery";
import { NavLink } from 'react-router-dom';

export default function XuLyThamDinh() {
    const contentRef1 = useRef(null);
    const contentRef2 = useRef(null);
    const contentRef3 = useRef(null);
    const contentRef4 = useRef(null);
    const contentRef5 = useRef(null);
    const contentRef6 = useRef(null);
    const contentRef7 = useRef(null);
    const contentRef8 = useRef(null);
    const contentRef9 = useRef(null);
    const contentRef10 = useRef(null);

    const scrollToContent = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // useEffect(() => {
    //     $('.xltd_nav>*').css({
    //         "background-color": "transparent",
    //         "color": "rgba(40, 40, 41, 0.9)",
    //         "border-right-color": "rgba(88, 88, 91, 0.12)"
    //     });
    //     $('body').on('click', '.xltd_nav>*', function (ev) {
    //         $('.xltd_nav>*').css({
    //             "background-color": "transparent",
    //             "color": "rgba(40, 40, 41, 0.9)",
    //             "border-right-color": "rgba(88, 88, 91, 0.12)"
    //         });
    //         $(this).css({
    //             "background-color": "rgb(228, 249, 238)",
    //             "color": "rgb(0, 153, 68)",
    //             "border-right-color": "rgb(57, 172, 109)"
    //         });
    //     });
    // }, []);

    return (
        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={2} cateid={140} id="2ee033e8-4bf3-4247-b0fe-eb9e79c85188">
            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={3} cateid={140} id="d419cefc-43c9-4b4a-98fa-28d069071b45">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="28cfc78e-b8c3-4262-a97d-a2e05346ad66">
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="281d0558-c2c6-4172-a193-0503151586fe">
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="ddac4148-fb90-44ed-8ad3-d4cf3ed857b4">
                            <div className="w-text wbaseItem-value" level={7} cateid={139} id="2fd744b0-d8b5-41e6-ab6b-3deea0148f23">Xử lý thẩm định<br /></div>
                        </div>
                        <div className="w-frame wbaseItem-value w-row breadcrumb" wrap="nowrap" level={6} cateid={140} id="3296996e-f124-429e-af2e-6ae73c7b700c"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="6ba621fc-090b-4797-96c7-1960956fd2eb">
                            <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="37a26bb5-0be3-4a32-aa25-f01c145b53e6">Hồ sơ chờ xử lý</div>
                            <div className="w-svg wbaseItem-value" level={8} cateid={115} id="b1ff9a36-2eb4-4859-a636-c3ebb40e6ffd"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.32236 4.04408C8.96293 3.65197 8.37041 3.65197 8.01097 4.04408C7.66301 4.42368 7.66301 5.03087 8.01097 5.41046L14.0514 12L8.01097 18.5895C7.66301 18.9691 7.66301 19.5763 8.01097 19.9559C8.37041 20.348 8.96293 20.348 9.32236 19.9559L15.989 12.6832C16.337 12.3036 16.337 11.6964 15.989 11.3168L9.32236 4.04408Z" fill="#28282999" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                            </svg>
                            </div>
                        </button>
                            <div className="w-text wbaseItem-value" level={7} cateid={139} id="76bb6455-2a36-4e4b-95cf-c3085df56ee8">10195662</div>
                        </div>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="3273b7b1-da8c-44fe-9769-6632e026237e"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={6} cateid={29} id="1d7f9274-6924-431f-bc6b-d95a2733ffc4">
                        <div className="w-svg wbaseItem-value" level={7} cateid={115} id="e5be005c-a77f-465a-937a-73c4a2fadbab"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4167 6.33333L9.91667 3H2.83333C2.61232 3 2.40036 3.0878 2.24408 3.24408C2.0878 3.40036 2 3.61232 2 3.83333V18.8333C2 19.4964 2.26339 20.1323 2.73223 20.6011C3.20107 21.0699 3.83696 21.3333 4.5 21.3333H19.5C20.163 21.3333 20.7989 21.0699 21.2678 20.6011C21.7366 20.1323 22 19.4964 22 18.8333V7.16667C22 6.94565 21.9122 6.73369 21.7559 6.57741C21.5996 6.42113 21.3877 6.33333 21.1667 6.33333H12.4167Z" fill="#28282999" />
                        </svg>
                        </div>
                        <NavLink to={"/ho-so-vay"} className="nav-link w-text wbaseItem-value" name-field="Text" level={7} cateid={139} id="68f74f75-0007-40a9-b126-8a2c0035470f">Xem hồ sơ ban đầu</NavLink>
                    </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={6} cateid={29} id="c14f7e67-1fce-46e2-a6dc-06b72712acb0">
                            <div className="w-svg wbaseItem-value" level={7} cateid={115} id="718d9a59-1bdf-4d9c-ae28-2470b396fc24"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5.33333V7H5.6V12H8V13.6667H5.6V18.6667H8V20.3333H4.8C4.3584 20.3333 4 19.96 4 19.5V2.83333C4 2.37333 4.3584 2 4.8 2C5.2416 2 5.6 2.37333 5.6 2.83333V5.33333H8Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                                <path d="M10.3996 8.66699H19.1996C19.6412 8.66699 19.9996 8.29366 19.9996 7.83366V4.50033C19.9996 4.04033 19.6412 3.66699 19.1996 3.66699H10.3996C9.95801 3.66699 9.59961 4.04033 9.59961 4.50033V7.83366C9.59961 8.29366 9.95801 8.66699 10.3996 8.66699Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                                <path d="M19.1996 22H10.3996C9.95801 22 9.59961 21.6275 9.59961 21.1667V17.8333C9.59961 17.3725 9.95801 17 10.3996 17H19.1996C19.6412 17 19.9996 17.3725 19.9996 17.8333V21.1667C19.9996 21.6275 19.6412 22 19.1996 22Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                                <path d="M10.3996 15.333H19.1996C19.6412 15.333 19.9996 14.9605 19.9996 14.4997V11.1663C19.9996 10.7063 19.6412 10.333 19.1996 10.333H10.3996C9.95801 10.333 9.59961 10.7063 9.59961 11.1663V14.4997C9.59961 14.9605 9.95801 15.333 10.3996 15.333Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                            </svg>
                            </div>
                            <div className="w-text wbaseItem-value" name-field="Text" level={7} cateid={139} id="aff59785-db5e-440e-b07c-70a50f5cabe0">Xem quy trình</div>
                        </button></div>
                </div>
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={4} cateid={140} id="9c11609f-7a17-473d-ae6a-1c67a2aee63a">
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="88200ed0-e2f4-4ca9-92c1-ed61ef3339c1">
                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={6} cateid={140} id="5d6f36fc-6dd8-470a-8703-e962e59b94fb">
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md" wrap="nowrap" level={7} cateid={140} id="1e666468-5fa9-421d-b122-75c8457b0b81">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="97c9362b-f188-44cd-af12-8fd31bd3ae72">Trạng thái:</div>
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="f4c6b0bc-5f2e-455f-972a-1998f3c119dc">Xử lý thẩm định</div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md" wrap="nowrap" level={7} cateid={140} id="6ed7665a-63eb-46ea-82e6-3089c125cde1">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="ffae164e-c970-4601-81ad-9e5942bc56a5">Người yêu cầu:</div>
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="5ebcff50-8408-4705-a97a-a9a7213527b2">binhan628@gmail.com</div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md" wrap="nowrap" level={7} cateid={140} id="01e0e572-7b45-4bfd-bf53-860ef0135447">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="c2022fef-1429-4c61-a2e1-7fbcc5d66b83">Người xử lý:</div>
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="bdb11287-753d-4dcf-b779-39c0c3faf6a1">binhan628@gmail.com</div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md" wrap="nowrap" level={7} cateid={140} id="02945e7a-e5e2-4b35-8ae6-1c95478e654c">
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="2f32740a-bfca-4e7a-81a8-0d038c8e6b22">Ngày khởi tạo:</div>
                                <div className="w-text wbaseItem-value" level={8} cateid={139} id="d882ed96-2337-4775-bba0-792617cd7e2f">11/11/2001</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="53713bb2-8860-4801-9d9d-0e8686f1671c">
                        <div className="w-frame wbaseItem-value w-col xltd_nav" wrap="nowrap" level={6} cateid={140} id="5e616295-209f-4faa-a8cb-ffab87e43469">
                            <div onClick={() => scrollToContent(contentRef1)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="c221a5fc-255c-4d29-8ceb-23db0cc1b67d">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="27be1afc-dce6-4f76-8681-59f234457034">Thông tin khách hàng</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef2)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="398f8758-772e-42bf-978e-ee422ec67374">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="1cd48211-0edd-4883-9257-be3cc0e09375">Thông tin khoản vay</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef3)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="4626bf4f-2dc2-42e2-81b9-92c701654b71">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="43f91273-56f0-4f47-9a53-c4648d5c1eb4">Tài chính khách hàng</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef4)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="a7456274-70f8-4d23-9db0-f473fe1d815e">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="3da1851a-d0cf-444b-b52e-b9e4d3f508c3">Ghi chú của SC</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef5)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="ee882fcf-1f08-4b76-a2e8-e2b1588c3f0a">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="95099804-ed09-4274-bb26-a47b7f8f50af">Hồ sơ đính kèm</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef6)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="0fc8ea17-6572-4ac5-b78d-fde14a8d42c5">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="c5166a29-f16b-4f73-999e-3e02988e6688">Lịch sử tín dụng tại các TCTD</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef7)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="dd94282d-46a7-42ce-b12c-a5f17ecddb56">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="0f95e294-6449-4912-b140-bf248e31e7f8">Lịch sử tín dụng tại JIVF</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef8)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="275c0251-1191-4570-aa56-4e161edfa3ff">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="e11f2834-061c-4b24-9045-27c21a8603e9">DTI</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef9)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="98bebcff-c907-4f24-acf6-825380786103">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="9dadc54d-9520-4262-ba15-f1ec87f265e5">Xếp hạng tín dụng</span>
                            </div>
                            <div onClick={() => scrollToContent(contentRef10)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="27a530b9-6892-4af1-bfaa-2330d2742767">
                                <span className="w-text wbaseItem-value" level={8} cateid={139} id="46997f93-ab86-4839-9d9b-2842ff528023">Ý kiến thẩm định</span>
                            </div>
                        </div>
                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" scroll="true" level={6} cateid={140} id="325aa45d-5725-489e-8367-5c81495f84bf">
                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={7} cateid={140} id="35f60223-fb48-456a-80a0-d7af2d31cb0b">
                                <div ref={contentRef1} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="405d38aa-d1ec-4c91-be91-3c7bc6b04e27">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="6146c95a-1aaf-4335-975f-31311318e418">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="cc7031f8-6927-4e5f-9a61-e0c0fec0e023">Thông tin khách hàng</div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="fdae192c-64f5-4667-a3f9-81780ef352a7"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={11} cateid={29} id="0c4800a6-a9eb-4157-b587-2a54059c62a7">
                                            <div className="w-svg wbaseItem-value" level={12} cateid={115} id="c79edcd1-710a-4694-b09a-0447c371273c"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.22093 21L1 13.8069L4.2907 10.529L8.22093 14.4556L19.7093 3L23 6.27799L8.22093 21Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                                            </svg>
                                            </div>
                                            <div className="w-text wbaseItem-value" name-field="Text" level={12} cateid={139} id="2cefd13c-40af-43ad-a921-f1fd8b1aea3d">eKYC</div>
                                        </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={11} cateid={29} id="5fc51d6b-58a0-43ae-a708-9075197892a2">
                                                <div className="w-svg wbaseItem-value" level={12} cateid={115} id="aeb2cba3-1155-43ce-a4da-1b75bcd0c18e"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.22093 21L1 13.8069L4.2907 10.529L8.22093 14.4556L19.7093 3L23 6.27799L8.22093 21Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                                                </svg>
                                                </div>
                                                <div className="w-text wbaseItem-value" name-field="Text" level={12} cateid={139} id="1c966f62-f41a-477d-bd5e-95f505bae486">CIC</div>
                                            </button></div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="2697042f-ac61-4b91-9930-8e440f58eb36">
                                        <div className="w-rect wbaseItem-value" level={10} cateid={138} id="0891f04a-5ce5-4fed-92fb-9c64c4f419f1" />
                                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="1c564e08-1f42-4ff9-87c9-3dcf11568cf6">
                                            <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={11} cateid={140} id="f8150a42-f1a0-4e42-b936-6a7e79a96890">
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="c0c14784-c2ed-43b4-a6cf-9a85cd9a3233">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="2734f228-b95f-4afa-825d-7b5761dcf9d5">Họ và tên:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="262fbe0f-0966-4561-9646-b2bac735c05e">Nguyễn Hoàng Duy</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="61e5406f-187e-4079-9843-9b87720ff319">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="fafe7dea-701b-4f49-906c-8029522d70d3">Giới tính:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="89721bf0-0c71-4c02-abb4-64789e9f16dc">Nam</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="896e4d85-692d-4809-84bc-2d6b67c37c31">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="8ea0de93-9042-4882-9679-cc76da64a928">Ngày sinh:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="55f47954-a3ca-4e54-bd95-766c753724c0">11/11/2001</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="bc3947fb-fc8c-4978-8096-29bf9d903bb5">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="82de6b63-b938-45cb-9909-596d4f8416c3">Số điện thoại di động:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="b6848651-e5e8-4266-b300-9d4c180893e5">0123256578</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="ee6b7b6f-762e-473b-a058-739962dbb28f">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="75cc2c47-12d5-4b13-a648-1ef829ddb477">Số CMND đã được cấp:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="f5c484c2-bbf5-4423-96bc-dcfd1b2af0dd">1234567890</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="37c3ff98-9098-4813-97b7-ef79bba6ca7b">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="0f5de4c1-a4fa-49b5-8d77-1dce7cefaa11">Số CCCD:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="2a39eca1-1f73-41a1-bf45-99c25ade15d9">1234567890</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="2a942dc5-493a-4b99-84ad-1721f7721a72">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="8291f192-bee2-485c-b62c-f0415bbf83ce">Ngày cấp:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="1eeb245f-98ad-4846-aa01-9c178872f71b">11/11/2001</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="65379434-013c-49d9-aab2-56a3a9215dde">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="8bd7f058-0966-4ab3-a5d5-c169f425ce23">Ngày hết hạn:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="523996e6-8b32-4a3b-9c0c-d7cee71a8c78">11/11/2001</div>
                                                </div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={11} cateid={140} id="946c885f-017d-4eff-83bc-10885584498f">
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="56a16a32-e1be-49af-9612-89b933e66d6b">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="30e384f2-9231-47b8-9be4-b1a1047e20fd">Địa chỉ thường trú:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="5a55a1c6-df33-4c1a-8397-da26d2eabc31">11 Thái Hà</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="2e2d52cf-5d7d-4490-975a-a8f94769df40">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="ee8d376a-09bd-4d45-86b1-a403306d1458">Tỉnh/Thành phố</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="23cd5ede-da8b-4c2f-81ea-f396fd5ef4a1">Hà Nội</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="51f63b4e-f194-4435-8b7c-e01c64281552">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="f47dd45f-e112-4c08-92ee-710f71cba16a">Quận/Huyện:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="29bda10d-69a7-4488-907c-18e9354701c4">Đống Đa</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="77346157-8006-4401-a5a6-9aaffb0aad4c">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="7d7bac68-4c47-47d7-98f8-bc4c8a9b5fab">Phường/Xã:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="bc5d8e0c-a3a7-4b5e-ab06-f4cf355d4d65">Trung Liệt</div>
                                                </div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={11} cateid={140} id="c92144e3-e571-45a6-a2d3-5ee1b21c5482">
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="6d2d906f-7ab5-40d7-8824-ba10b07157d7">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="50caed89-2ef9-4891-b801-2e300b50ed6a">Nơi ở hiện tại:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="b9c11563-256b-4f38-964b-fb71877a94fd">11 Thái Hà</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="be4e9645-78a3-4104-a98b-d8624066a21c">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="2f138db4-4df9-4fa5-82f9-1d59f44683ba">Tỉnh/Thành phố</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="a8700ac8-11be-45e8-8bc7-ac3cff987db1">Hà Nội</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="854ef7c3-fc65-4f7d-8f42-2b985a6fc211">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="81a2ff78-3fea-4d40-beef-f930ad832472">Quận/Huyện:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="6a31dafa-3b56-4f64-8d8e-720a2281dd35">Đống Đa</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="79441a16-9634-448e-9820-6998f7d1d260">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="fcbaffb4-a9bf-452c-aa34-58d34eb9ba18">Phường/Xã:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="5de1fb76-1868-4915-9843-e910527dc3dd">Trung Liệt</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="3626b0e5-691f-4b07-a23c-7b46c73531d6">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="3e94b3ed-afcd-44c7-acea-6af534c1326c">Thời gian cư trú:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="4811b0c9-4a00-49dc-9db4-6dde6b47a828">1 năm 6 tháng</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col24-md col6-xl" wrap="nowrap" level={12} cateid={140} id="8e04d329-b92e-4946-a453-1761b1e80ff3">
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="a08b8291-567d-4ba5-9f5a-cc9a70d1e5a0">Tình trạng cư trú:</div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="4fdad3b9-20ac-4f00-a656-7fb45c9fc8b7">Đang ở</div>
                                                </div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={11} cateid={140} id="a9335fab-042f-4b24-ad18-8fb4e02f37cb">
                                                <div className="w-frame wbaseItem-value w-col col- col12-xxl col12-xl col24-lg col24-md" wrap="nowrap" level={12} cateid={140} id="85c693fe-b62e-4758-b5e3-50120e02553b">
                                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={13} cateid={140} id="93ccdaaf-b856-47c6-9839-c39d642b29f5">
                                                        <div className="w-text wbaseItem-value" level={14} cateid={139} id="dd90b41d-c7a6-4323-afba-60182e5038bb">Họ tên trên CIC/PCB:</div>
                                                        <div className="w-text wbaseItem-value" level={14} cateid={139} id="dc328460-bbc3-48e8-846e-d6b742baab09">Nguyễn Hoàng Duy</div>
                                                    </div>
                                                    <form className="w-frame w-form wbaseItem-value w-row" wrap="nowrap" level={13} cateid={128} id="6a755c35-a1a5-453c-a6ee-61ca066e7d1c">
                                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={14} cateid={140} id="000de810-89b1-4625-8c3a-5c4b19b37f73">
                                                            <div className="w-radio-btn wbaseItem-value" name-field="a" level={15} cateid={90} id="040449dc-c573-402f-a430-6676724929ba"><input type="radio" name="a" id="input-040449dc-c573-402f-a430-6676724929ba" defaultChecked defaultValue /><span className="checkmark" /></div>
                                                            <div className="w-text wbaseItem-value" level={15} cateid={139} id="24a273f0-73fc-4dd5-b406-b04763659ffe">Hợp lệ</div>
                                                        </div>
                                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={14} cateid={140} id="e85963bb-149e-48bd-8838-f902c4622015">
                                                            <div className="w-radio-btn wbaseItem-value" name-field="a" level={15} cateid={90} id="1b767133-67a7-4f20-977b-bdfa0f09c8a7"><input type="radio" name="a" id="input-1b767133-67a7-4f20-977b-bdfa0f09c8a7" defaultChecked defaultValue /><span className="checkmark" /></div>
                                                            <div className="w-text wbaseItem-value" level={15} cateid={139} id="6aa9642d-b859-4a69-8e62-34274690de0e">Không hợp lệ</div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-col col- col12-xxl col12-xl col24-lg col24-md" wrap="nowrap" level={12} cateid={140} id="f063ad2b-a4dd-46e2-bd02-f7add22e72dd">
                                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={13} cateid={140} id="d52e1a3f-f157-4b0f-bb80-0d4ad605f564">
                                                        <div className="w-text wbaseItem-value" level={14} cateid={139} id="18a02544-844f-4311-b3d1-8be3bcd530f7">Địa chỉ thường trú trên CIC/PCB:</div>
                                                        <div className="w-text wbaseItem-value" level={14} cateid={139} id="77a9f737-1e53-49d1-8927-69670bb91a91">11 Thái Hà, Trung Liệt, Đống Đa, Hà Nội</div>
                                                    </div>
                                                    <form className="w-frame w-form wbaseItem-value w-row" wrap="nowrap" level={13} cateid={128} id="562f4c73-da8a-4b4d-ae23-44247c03195b">
                                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={14} cateid={140} id="2c0860b6-4f82-4456-a364-6806e3a33243">
                                                            <div className="w-radio-btn wbaseItem-value" name-field="a" level={15} cateid={90} id="ab6755b0-fdb4-4882-8812-f71d6fc5e07f"><input type="radio" name="a" id="input-ab6755b0-fdb4-4882-8812-f71d6fc5e07f" defaultChecked defaultValue /><span className="checkmark" /></div>
                                                            <div className="w-text wbaseItem-value" level={15} cateid={139} id="a61eb308-51cc-4621-85a4-ad964763a1eb">Hợp lệ</div>
                                                        </div>
                                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={14} cateid={140} id="fff75348-32d0-44df-a840-d0e61b3d1d3e">
                                                            <div className="w-radio-btn wbaseItem-value" name-field="a" level={15} cateid={90} id="1b58080d-1bee-47a0-a6aa-050c82a88f22"><input type="radio" name="a" id="input-1b58080d-1bee-47a0-a6aa-050c82a88f22" defaultChecked defaultValue /><span className="checkmark" /></div>
                                                            <div className="w-text wbaseItem-value" level={15} cateid={139} id="84cf8c1d-8a46-4dbe-abfc-fb7e1461d02f">Không hợp lệ</div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={contentRef2} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="39772e26-afa4-482d-aab0-323c690254c3">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="20742a86-6164-46c7-9893-e72eeed75116">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="ae0d8995-ff5e-48ce-8dfa-c079d99b8c09">Thông tin khoản vay</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="52de28cc-a648-4e01-8794-7fa0ca869ac1">
                                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="911c6c4e-7ae1-4dec-995b-82b0e08fc4dc">
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="c1aac5d0-4606-43d7-b19c-d93ad1bed7bd">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="0ddc5faf-046c-47aa-91e6-36afdd85d986">Sản phẩm vay:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="507250ce-84ec-4837-ba9c-8e95d58043a7">Sản phẩm 1</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="ec990641-da50-4443-ba89-24044363c067">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="975ee855-404d-4f10-ad15-f1da59fcf3c4">Đại lý:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="f887ec76-0db5-4016-96a6-2c500fe4eddc">Hà Nội</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="170cfcdc-f632-4614-aee8-fb87d1e9eb50">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="d5c252fc-1c42-4601-a801-7a949dbf1480">Địa chỉ đại lý:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="4cd64fc7-bfec-4abf-a127-680868472bfd">Đống Đa, Hà Nội</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="1b959548-2959-4c4b-aa8c-5b591f15829c">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="ebd497b4-e71a-44ba-8bae-bc1be18ae0f1">Chương trình vay:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="a9c8225f-5035-47b5-be1f-76756f31f286">Chương trình cho vay mua xe honda, lãi suất 8%/năm, không chứng mình thu nhập, thời hạn tối đã 12 tháng</div>
                                            </div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="3113a7df-9cb4-406e-b1e8-22da8fcb3abb">
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="ec37ea3d-ecf8-4b0b-a8bc-b3b5d90b7c2d">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="aa43c3a5-1ddf-4829-bcf2-ded5f031b44f">Mục đích vay:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="0b525ebc-df1d-4347-ae1c-0f5f1b27e4a1">Mua xe</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="87079aa1-ad80-47a7-bbaf-29c7ead68743">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="06d0cb0b-9f29-4ed5-845e-ef3a1e604fd8">Nhãn hiệu:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="49b0b3b9-459e-4a5e-8c4c-7f634128fdbd">Nhãn 1</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="9d89a4fa-6e10-4416-8871-251694f45743">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="1312ec8b-5472-4410-96e4-b9a086b265c9">Màu sắc:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="fccac16f-e924-4d9b-8dba-69b11981c267">Đỏ</div>
                                            </div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="74d43f08-2ea3-45c0-a1e1-b81215fead90">
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="e52730ba-4f1f-4ccd-85ab-09ebe2fc4414">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="7da439a4-b4eb-499f-8a1a-30bceb1e32d5">Số tiền vay gốc:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="679fab63-0c6a-4a68-bc30-27b2f1036815">15.000.000&nbsp;VND</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="83d99b5e-2ea5-4e2f-b2e2-fd2ca0c0028f">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="f31a7480-52c2-45e7-8137-0820d78fd558">Tổng khoản vay bao gồm bảo hiểm:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="8673fe08-1058-49a9-a990-16641cb1b3c3">15.700.000 VND</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="3e86eaac-7966-4ecd-8b10-a002dcce9631">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="d9545e56-9937-421c-88ea-80f16504d89e">Kỳ hạn vay:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="ddce4018-dd8d-4425-b9fb-a26283fe480d">36 tháng</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="b5aa0627-8638-4e57-82a5-59d2029208bf">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="c794c795-3f16-4824-ab31-52291b52f73e">Ngày thanh toán hàng tháng:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="cd69faed-40ed-4be9-ac6c-a9aa0063ab6a">21</div>
                                            </div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="544dcfd2-aec0-4b27-a21b-a4adce94d70c">
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="40790fe6-de86-4fd9-ac68-1c7882b22544">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="d31fcac2-fd5d-4df3-815f-ca9a4fbcc766">Tổng giá bán:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="7b1dd942-b6eb-4ee6-b640-82d464d3282a">15.500.000 VND</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="8dd2069c-f4a3-4de6-8739-640bafcb33a6">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="9e76e843-38c1-47b4-a6cb-c16a35b780bd">Tỷ lệ % trả trước:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="3901f78e-0a1a-4ee5-9c67-53d224cf38db">5%</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col24-md" wrap="nowrap" level={11} cateid={140} id="ea891a69-9617-4f0f-8d1e-71ecb96e1800">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="5c341fd4-c22c-4af6-acef-7a2e478cbf5b">Số tiền trả trước:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="4ac383f0-9e59-41c3-836a-5e6acfe0ac56">500.000&nbsp;VND</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={contentRef3} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="e9a5e3ae-ac61-48cb-a626-5d6b44a613c5">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="8614334c-3c31-4c04-b716-4b2c09e61f6c">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="193d0f36-796e-4514-9ebd-fffef88cb27a">Tài chính khách hàng</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="6d3e4938-2828-491a-ab17-0c162908e163">
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col8-xl col12-lg col24-md" wrap="nowrap" level={10} cateid={140} id="f3e69192-e8c0-48e6-90c3-e9e0a117e9bc">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="dbf0ebb1-c4b5-4dbf-a824-4dd592b987f9">Nghề nghiệp:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="b12ca2e9-10ca-4331-b929-e619dfc97ff4">Nghề nghiệp</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col8-xl col12-lg col24-md" wrap="nowrap" level={10} cateid={140} id="bd11bac2-7864-4ed9-8571-47564f5f7e7d">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="2d8b735e-b8cf-4eac-9175-1ba4f0617c4c">Tên công ty/Nơi làm việc:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="4d72f748-df4d-4645-861e-d4a2edbd1cf6">Tên công ty</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col8-xl col12-lg col24-md" wrap="nowrap" level={10} cateid={140} id="d8cd46ee-15b9-4d92-a3c5-bbb5487b92e0">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="2a40e477-d444-46e1-a97d-99dea110de1c">Địa chỉ nơi làm việc:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="c61b43b0-a337-48bd-ae16-0061562d68b2">Hà Nội</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col8-xl col12-lg col24-md" wrap="nowrap" level={10} cateid={140} id="8d85c170-2164-4c4e-bff3-38bfef8f748d">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="b3203fe1-075f-470c-bb0b-0214e3417211">Số điện thoại công ty:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="59fc51c9-ecf5-4daf-999a-eb9729f809cb">0123456789</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col8-xl col12-lg col24-md" wrap="nowrap" level={10} cateid={140} id="e985aaba-8219-4379-a4a3-2d1a05244fb2">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="b2da908f-5267-4115-9d87-5decd4174e9e">Thu nhập hàng tháng:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="269e2130-c2e5-45a0-8fa4-a8fdec5d9476">15.000.000&nbsp;VND</div>
                                        </div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="ecb53bc8-16f2-4d60-9642-941e1194aefb">
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col24-lg col24-md col12-xl" wrap="nowrap" level={10} cateid={140} id="9988f663-b486-4f84-99a4-7a8ea6e01a32">
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="ede7cee1-68d1-4a14-a6ab-2e16a69c5bba">
                                                <div className="w-check-box wbaseItem-value" value="false" name-field="Checkbox" level={12} cateid={79} id="375aab6e-91d1-42af-85a3-218762103642"><input type="checkbox" id="input-375aab6e-91d1-42af-85a3-218762103642" name="Checkbox" /><canvas className="checkmark" checkcolor="ffffffff" width={20} height={20} /></div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="d9608e2d-8014-48d7-adec-26aedafeeef3">Nợ vay khác</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="fd059c03-f7ed-48d4-89a8-210bfb71101d">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="764a4201-f366-495a-8b5a-707f2e4492ab">Tổng thanh toán nợ vay hàng tháng:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="9befd598-f04c-4313-b09c-f09ce8f7bede">15.500.000 VND</div>
                                            </div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col24-lg col24-md col12-xl" wrap="nowrap" level={10} cateid={140} id="757f5219-cab7-44dc-929f-33c35d66c8f2">
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="56c0b006-d3fa-4b3c-b211-166abd05da08">
                                                <div className="w-check-box wbaseItem-value" value="false" name-field="Checkbox" level={12} cateid={79} id="c7b7a02e-536f-4ea2-b20e-788b5e311baf"><input type="checkbox" id="input-c7b7a02e-536f-4ea2-b20e-788b5e311baf" name="Checkbox" /><canvas className="checkmark" checkcolor="ffffffff" width={20} height={20} /></div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="49624a67-6abc-4d46-81a3-6b01b4747f21">Người phụ thuộc</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="2fa1798e-3334-4d30-81c0-d089d9f6b18c">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="9c491121-67fe-4a27-a201-35c9a68889c8">Số người phụ thuộc</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="3b6acde5-0031-4de9-8d92-8e61c2e86e91">3</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={contentRef4} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="b36fd613-a9cf-442c-8a67-fca6da460f7a">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="9053e1fc-4f45-4fe7-9ee4-9fe9ef2b8f98">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="6582cf13-963d-4253-8081-94b461cf6872">Ghi chú của SC</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="5d5f3c58-808b-4cd5-a1d9-f250df81e718">
                                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="3b7a4e78-e8fd-4447-b635-afe096b5278b">
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="fb06cfe6-c117-4e11-8257-0d9c89250698">
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="6700ec03-df28-4262-ae9f-6b82fda59241">
                                                    <div className="w-svg wbaseItem-value" level={13} cateid={115} id="f4efbf4b-3198-4022-924a-dd46140f2ac2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.9997 7C16.9997 9.76142 14.7611 12 11.9997 12C9.23826 12 6.99968 9.76142 6.99968 7C6.99968 4.23858 9.23826 2 11.9997 2C14.7611 2 16.9997 4.23858 16.9997 7Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M3.66667 19.222C3.66667 17.177 6.375 13.667 12 13.667C17.625 13.667 20.3333 17.177 20.3333 19.222V20.3337C20.3333 20.7757 20.1577 21.1996 19.8452 21.5122C19.5326 21.8247 19.1087 22.0003 18.6667 22.0003H5.33334C4.89131 22.0003 4.46739 21.8247 4.15483 21.5122C3.84227 21.1996 3.66667 20.7757 3.66667 20.3337V19.222Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="fb654abd-c963-4df8-9722-2054e675d6e3">nguoiupload@gmail.com</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="5d2ea761-184e-4753-8f81-931170ede612">
                                                    <div className="w-svg wbaseItem-value" level={13} cateid={115} id="8240ca7a-dcdf-4be5-81e1-84e36c842db9"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.16667 11.1667C5.70643 11.1667 5.33333 11.5398 5.33333 12V12.8333C5.33333 13.2936 5.70643 13.6667 6.16667 13.6667H7.83333C8.29357 13.6667 8.66667 13.2936 8.66667 12.8333V12C8.66667 11.5398 8.29357 11.1667 7.83333 11.1667H6.16667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M11.1667 11.1667C10.7064 11.1667 10.3333 11.5398 10.3333 12V12.8333C10.3333 13.2936 10.7064 13.6667 11.1667 13.6667H12.8333C13.2936 13.6667 13.6667 13.2936 13.6667 12.8333V12C13.6667 11.5398 13.2936 11.1667 12.8333 11.1667H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M5.33333 16.1667C5.33333 15.7064 5.70643 15.3333 6.16667 15.3333H7.83333C8.29357 15.3333 8.66667 15.7064 8.66667 16.1667V17C8.66667 17.4602 8.29357 17.8333 7.83333 17.8333H6.16667C5.70643 17.8333 5.33333 17.4602 5.33333 17V16.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M11.1667 15.3333C10.7064 15.3333 10.3333 15.7064 10.3333 16.1667V17C10.3333 17.4602 10.7064 17.8333 11.1667 17.8333H12.8333C13.2936 17.8333 13.6667 17.4602 13.6667 17V16.1667C13.6667 15.7064 13.2936 15.3333 12.8333 15.3333H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M15.3333 12C15.3333 11.5398 15.7064 11.1667 16.1667 11.1667H17.8333C18.2936 11.1667 18.6667 11.5398 18.6667 12V12.8333C18.6667 13.2936 18.2936 13.6667 17.8333 13.6667H16.1667C15.7064 13.6667 15.3333 13.2936 15.3333 12.8333V12Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.83333 2.83333C7.83333 2.3731 7.46024 2 7 2C6.53976 2 6.16667 2.3731 6.16667 2.83333V3.66667H4.5C3.11929 3.66667 2 4.78595 2 6.16667V18.6667C2 20.0474 3.11929 21.1667 4.5 21.1667H19.5C20.8807 21.1667 22 20.0474 22 18.6667V6.16667C22 4.78595 20.8807 3.66667 19.5 3.66667H17.8333V2.83333C17.8333 2.3731 17.4602 2 17 2C16.5398 2 16.1667 2.3731 16.1667 2.83333V3.66667H7.83333V2.83333ZM4.5 5.33333C4.03976 5.33333 3.66667 5.70643 3.66667 6.16667V7.83333H20.3333V6.16667C20.3333 5.70643 19.9602 5.33333 19.5 5.33333H17.8333C17.8333 5.79357 17.4602 6.16667 17 6.16667C16.5398 6.16667 16.1667 5.79357 16.1667 5.33333H7.83333C7.83333 5.79357 7.46024 6.16667 7 6.16667C6.53976 6.16667 6.16667 5.79357 6.16667 5.33333H4.5ZM4.5 19.5C4.03976 19.5 3.66667 19.1269 3.66667 18.6667V9.5H20.3333V18.6667C20.3333 19.1269 19.9602 19.5 19.5 19.5H4.5Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="0420a2c6-04c1-416b-b758-edbdda101618">01/06/2023</div>
                                                </div>
                                            </div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="6b48d9e5-30b7-4778-b8da-47060cd8904c">Bổ sung đầy đủ thông tin cá nhân, thông tin người thân. Hồ sơ đính kèm.</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="7b2744f4-e230-45e9-bc60-9fc8fb702ef9">
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="e13d2e8c-0d50-4602-a884-bf78d48e0294">
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="ada2d472-da63-4477-88f7-e8aeece77240">
                                                    <div className="w-svg wbaseItem-value" level={13} cateid={115} id="7a89fd59-d7a2-4866-b68c-e08c44bf14c5"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.9997 7C16.9997 9.76142 14.7611 12 11.9997 12C9.23826 12 6.99968 9.76142 6.99968 7C6.99968 4.23858 9.23826 2 11.9997 2C14.7611 2 16.9997 4.23858 16.9997 7Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M3.66667 19.222C3.66667 17.177 6.375 13.667 12 13.667C17.625 13.667 20.3333 17.177 20.3333 19.222V20.3337C20.3333 20.7757 20.1577 21.1996 19.8452 21.5122C19.5326 21.8247 19.1087 22.0003 18.6667 22.0003H5.33334C4.89131 22.0003 4.46739 21.8247 4.15483 21.5122C3.84227 21.1996 3.66667 20.7757 3.66667 20.3337V19.222Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="81a741f0-9c77-4379-af7e-86843812aae0">nguoiupload@gmail.com</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="cc09bd74-b797-496f-b054-773fb2457a39">
                                                    <div className="w-svg wbaseItem-value" level={13} cateid={115} id="68791ee9-9fbe-4d07-85a8-28f2ba7951c0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.16667 11.1667C5.70643 11.1667 5.33333 11.5398 5.33333 12V12.8333C5.33333 13.2936 5.70643 13.6667 6.16667 13.6667H7.83333C8.29357 13.6667 8.66667 13.2936 8.66667 12.8333V12C8.66667 11.5398 8.29357 11.1667 7.83333 11.1667H6.16667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M11.1667 11.1667C10.7064 11.1667 10.3333 11.5398 10.3333 12V12.8333C10.3333 13.2936 10.7064 13.6667 11.1667 13.6667H12.8333C13.2936 13.6667 13.6667 13.2936 13.6667 12.8333V12C13.6667 11.5398 13.2936 11.1667 12.8333 11.1667H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M5.33333 16.1667C5.33333 15.7064 5.70643 15.3333 6.16667 15.3333H7.83333C8.29357 15.3333 8.66667 15.7064 8.66667 16.1667V17C8.66667 17.4602 8.29357 17.8333 7.83333 17.8333H6.16667C5.70643 17.8333 5.33333 17.4602 5.33333 17V16.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M11.1667 15.3333C10.7064 15.3333 10.3333 15.7064 10.3333 16.1667V17C10.3333 17.4602 10.7064 17.8333 11.1667 17.8333H12.8333C13.2936 17.8333 13.6667 17.4602 13.6667 17V16.1667C13.6667 15.7064 13.2936 15.3333 12.8333 15.3333H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M15.3333 12C15.3333 11.5398 15.7064 11.1667 16.1667 11.1667H17.8333C18.2936 11.1667 18.6667 11.5398 18.6667 12V12.8333C18.6667 13.2936 18.2936 13.6667 17.8333 13.6667H16.1667C15.7064 13.6667 15.3333 13.2936 15.3333 12.8333V12Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.83333 2.83333C7.83333 2.3731 7.46024 2 7 2C6.53976 2 6.16667 2.3731 6.16667 2.83333V3.66667H4.5C3.11929 3.66667 2 4.78595 2 6.16667V18.6667C2 20.0474 3.11929 21.1667 4.5 21.1667H19.5C20.8807 21.1667 22 20.0474 22 18.6667V6.16667C22 4.78595 20.8807 3.66667 19.5 3.66667H17.8333V2.83333C17.8333 2.3731 17.4602 2 17 2C16.5398 2 16.1667 2.3731 16.1667 2.83333V3.66667H7.83333V2.83333ZM4.5 5.33333C4.03976 5.33333 3.66667 5.70643 3.66667 6.16667V7.83333H20.3333V6.16667C20.3333 5.70643 19.9602 5.33333 19.5 5.33333H17.8333C17.8333 5.79357 17.4602 6.16667 17 6.16667C16.5398 6.16667 16.1667 5.79357 16.1667 5.33333H7.83333C7.83333 5.79357 7.46024 6.16667 7 6.16667C6.53976 6.16667 6.16667 5.79357 6.16667 5.33333H4.5ZM4.5 19.5C4.03976 19.5 3.66667 19.1269 3.66667 18.6667V9.5H20.3333V18.6667C20.3333 19.1269 19.9602 19.5 19.5 19.5H4.5Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="635d2392-56f2-4acc-ad52-77941aa4e676">01/06/2023</div>
                                                </div>
                                            </div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="92c06633-141e-41b3-b36d-8f07e8e438e0">Bổ sung đầy đủ thông tin cá nhân, thông tin người thân. Hồ sơ đính kèm.</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="3dcc68a6-226a-4f6e-9504-66c5527de091">
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="1e85e441-8bf9-4f30-9f10-4afcf3c83b8b">
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="517dc3d5-3d39-4cf9-9a1d-1ac5d3aad50c">
                                                    <div className="w-svg wbaseItem-value" level={13} cateid={115} id="3355af93-4650-4633-a602-a8f379340bf8"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.9997 7C16.9997 9.76142 14.7611 12 11.9997 12C9.23826 12 6.99968 9.76142 6.99968 7C6.99968 4.23858 9.23826 2 11.9997 2C14.7611 2 16.9997 4.23858 16.9997 7Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M3.66667 19.222C3.66667 17.177 6.375 13.667 12 13.667C17.625 13.667 20.3333 17.177 20.3333 19.222V20.3337C20.3333 20.7757 20.1577 21.1996 19.8452 21.5122C19.5326 21.8247 19.1087 22.0003 18.6667 22.0003H5.33334C4.89131 22.0003 4.46739 21.8247 4.15483 21.5122C3.84227 21.1996 3.66667 20.7757 3.66667 20.3337V19.222Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="ed65f11e-3873-4a8d-b2f8-1bf0766dc0a4">nguoiupload@gmail.com</div>
                                                </div>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="1ba1e7ba-36c5-4ebf-998f-868434da5e2e">
                                                    <div className="w-svg wbaseItem-value" level={13} cateid={115} id="f2e29ff8-3cf9-4314-84b5-29a63bab5175"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.16667 11.1667C5.70643 11.1667 5.33333 11.5398 5.33333 12V12.8333C5.33333 13.2936 5.70643 13.6667 6.16667 13.6667H7.83333C8.29357 13.6667 8.66667 13.2936 8.66667 12.8333V12C8.66667 11.5398 8.29357 11.1667 7.83333 11.1667H6.16667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M11.1667 11.1667C10.7064 11.1667 10.3333 11.5398 10.3333 12V12.8333C10.3333 13.2936 10.7064 13.6667 11.1667 13.6667H12.8333C13.2936 13.6667 13.6667 13.2936 13.6667 12.8333V12C13.6667 11.5398 13.2936 11.1667 12.8333 11.1667H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M5.33333 16.1667C5.33333 15.7064 5.70643 15.3333 6.16667 15.3333H7.83333C8.29357 15.3333 8.66667 15.7064 8.66667 16.1667V17C8.66667 17.4602 8.29357 17.8333 7.83333 17.8333H6.16667C5.70643 17.8333 5.33333 17.4602 5.33333 17V16.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M11.1667 15.3333C10.7064 15.3333 10.3333 15.7064 10.3333 16.1667V17C10.3333 17.4602 10.7064 17.8333 11.1667 17.8333H12.8333C13.2936 17.8333 13.6667 17.4602 13.6667 17V16.1667C13.6667 15.7064 13.2936 15.3333 12.8333 15.3333H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M15.3333 12C15.3333 11.5398 15.7064 11.1667 16.1667 11.1667H17.8333C18.2936 11.1667 18.6667 11.5398 18.6667 12V12.8333C18.6667 13.2936 18.2936 13.6667 17.8333 13.6667H16.1667C15.7064 13.6667 15.3333 13.2936 15.3333 12.8333V12Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.83333 2.83333C7.83333 2.3731 7.46024 2 7 2C6.53976 2 6.16667 2.3731 6.16667 2.83333V3.66667H4.5C3.11929 3.66667 2 4.78595 2 6.16667V18.6667C2 20.0474 3.11929 21.1667 4.5 21.1667H19.5C20.8807 21.1667 22 20.0474 22 18.6667V6.16667C22 4.78595 20.8807 3.66667 19.5 3.66667H17.8333V2.83333C17.8333 2.3731 17.4602 2 17 2C16.5398 2 16.1667 2.3731 16.1667 2.83333V3.66667H7.83333V2.83333ZM4.5 5.33333C4.03976 5.33333 3.66667 5.70643 3.66667 6.16667V7.83333H20.3333V6.16667C20.3333 5.70643 19.9602 5.33333 19.5 5.33333H17.8333C17.8333 5.79357 17.4602 6.16667 17 6.16667C16.5398 6.16667 16.1667 5.79357 16.1667 5.33333H7.83333C7.83333 5.79357 7.46024 6.16667 7 6.16667C6.53976 6.16667 6.16667 5.79357 6.16667 5.33333H4.5ZM4.5 19.5C4.03976 19.5 3.66667 19.1269 3.66667 18.6667V9.5H20.3333V18.6667C20.3333 19.1269 19.9602 19.5 19.5 19.5H4.5Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                    <div className="w-text wbaseItem-value" level={13} cateid={139} id="18b6566d-a22e-4eb8-9764-408358da6f42">01/06/2023</div>
                                                </div>
                                            </div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="b6450a77-78a2-4ff4-8760-fac1e5ca13a6">Bổ sung đầy đủ thông tin cá nhân, thông tin người thân. Hồ sơ đính kèm.</div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={contentRef5} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="3243d9e9-1039-4697-a513-1fad2773fae9">
                                    <div className="w-text wbaseItem-value" level={9} cateid={139} id="6fa228d9-acd7-4719-8b4e-d8a6e0a57214">Hồ sơ đính kèm</div>
                                    <table className="w-table wbaseItem-value" type={0} name-field="Table" level={9} cateid={117} id="967258cf-8146-447c-bc93-dd943a3a8b82">
                                        <tbody>
                                            <tr className="table-row">
                                                <td id="1x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d18abe81-bd3f-4c96-a4f3-68f2e2a9bd56">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="eb47c560-932a-47d5-b006-c24d931dd7fe">Loại hồ sơ</div>
                                                    </div>
                                                </td>
                                                <td id="1x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="f818bbae-3af1-45a0-af47-06e017b1e39b">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="11c9bcb4-f91f-472e-94d2-bff14843e4ae">Tệp đính kèm</div>
                                                    </div>
                                                </td>
                                                <td id="1x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="48fea432-a8f5-4b48-adc3-0466b0936def" />
                                                </td>
                                                <td id="1x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="a998ba5b-5864-49c5-a47a-ed1444c33249">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="4e440123-6fac-40dd-860e-5f6edcf21849">Yêu cầu sửa</div>
                                                    </div>
                                                </td>
                                                <td id="1x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d2f2fb31-706e-445f-a05c-19b06b999d8b">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="0846594d-ab5e-4b20-bf0e-95dda9e1eb70">Thẩm định</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-row">
                                                <td id="2x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="ce696fb5-0a1c-4c9a-ad2c-b3aba194d71b">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="36359a3e-21d3-407a-a303-d1f81df0ab7e">Hồ sơ 1</div>
                                                    </div>
                                                </td>
                                                <td id="2x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="7d782e80-383a-40a5-b4cf-d036a03914aa">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="751c29de-33ab-4e81-9438-962958180165">ho_so_1.pdf</div>
                                                    </div>
                                                </td>
                                                <td id="2x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="2013bf6e-cd63-42c8-be78-73c6b7b6b73c">
                                                        <div className="w-svg wbaseItem-value" level={11} cateid={115} id="a17fa7d0-f8f0-4738-a1ed-7aef5cddf3f2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                            <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                        </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td id="2x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="27bcd17f-0988-413e-b8be-f98c42859510">
                                                        <div className="w-check-box wbaseItem-value" value="false" name-field="Checkbox" level={11} cateid={79} id="4ddf0375-317e-4f8d-bafc-8e5afcf82252"><input type="checkbox" id="input-4ddf0375-317e-4f8d-bafc-8e5afcf82252" name="Checkbox" /><canvas className="checkmark" checkcolor="ffffffff" width={20} height={20} /></div>
                                                    </div>
                                                </td>
                                                <td id="2x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="6fad5d2c-02a0-403c-84cb-174649f72db1">
                                                        <form className="w-frame w-form wbaseItem-value w-row" wrap="nowrap" level={11} cateid={128} id="659dc2f7-934d-48c6-8fb1-0d360d3b6ba8">
                                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="4a87ad15-4b60-4ffd-a883-4acb7eee5ad8">
                                                                <div className="w-radio-btn wbaseItem-value" name-field="a" level={13} cateid={90} id="73b69574-6fd1-4037-bdd4-e6700ae2a0dd"><input type="radio" name="a" id="input-73b69574-6fd1-4037-bdd4-e6700ae2a0dd" defaultValue /><span className="checkmark" /></div>
                                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="0ab0b73b-9428-46e6-8fda-57c681fbcf2d">Hợp lệ</div>
                                                            </div>
                                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="1d6235e5-8cff-4255-b41d-1d67c395f671">
                                                                <div className="w-radio-btn wbaseItem-value" name-field="a" level={13} cateid={90} id="d633075e-5a8d-4d99-a7a3-7063a127fdfc"><input type="radio" name="a" id="input-d633075e-5a8d-4d99-a7a3-7063a127fdfc" defaultChecked defaultValue /><span className="checkmark" /></div>
                                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="c51bf398-b814-457b-9433-c8ebfe11a129">Không hợp lệ</div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-row">
                                                <td id="3x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="38b88a45-1998-4b9d-9551-f6a00da40c03">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="35b39be5-0204-46f7-9db2-0ee164774623">Hồ sơ 1</div>
                                                    </div>
                                                </td>
                                                <td id="3x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="cd446b37-96a1-4de3-827c-20cf5b29d95b">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="5f30f982-9d89-4e26-95ea-76c277982db3">ho_so_1.pdf</div>
                                                    </div>
                                                </td>
                                                <td id="3x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="fde32f13-3fae-42d8-a3ce-4e5541fb2142">
                                                        <div className="w-svg wbaseItem-value" level={11} cateid={115} id="f97c13f6-b3c2-4bff-9ee2-0b93ad666abd"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                            <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                        </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td id="3x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="ee1dbb04-19af-49c2-9b93-8c6d9f2d6378">
                                                        <div className="w-check-box wbaseItem-value" value="false" name-field="Checkbox" level={11} cateid={79} id="a51cc703-886d-4339-a020-cf4b5fbc4d69"><input type="checkbox" id="input-a51cc703-886d-4339-a020-cf4b5fbc4d69" name="Checkbox" /><canvas className="checkmark" checkcolor="ffffffff" width={20} height={20} /></div>
                                                    </div>
                                                </td>
                                                <td id="3x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="4011e7bc-4262-4fc9-8e53-526db5918075">
                                                        <form className="w-frame w-form wbaseItem-value w-row" wrap="nowrap" level={11} cateid={128} id="7b1be097-8003-4bf9-a776-f88aef6b1333">
                                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="9a42367b-07c1-4d15-ba10-bf0bd57fd441">
                                                                <div className="w-radio-btn wbaseItem-value" name-field="a" level={13} cateid={90} id="6cf26c55-0ad2-4160-b0f2-642a463cf7cb"><input type="radio" name="a" id="input-6cf26c55-0ad2-4160-b0f2-642a463cf7cb" defaultValue /><span className="checkmark" /></div>
                                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="cf277069-7fcd-40f3-8e82-7a0afb6be714">Hợp lệ</div>
                                                            </div>
                                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="d91f72a5-338e-4449-85cd-f5cb88714405">
                                                                <div className="w-radio-btn wbaseItem-value" name-field="a" level={13} cateid={90} id="a77613e7-84d3-466d-b1a5-b5dd9ecde73a"><input type="radio" name="a" id="input-a77613e7-84d3-466d-b1a5-b5dd9ecde73a" defaultChecked defaultValue /><span className="checkmark" /></div>
                                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="24bdd2df-92e6-497f-8bec-cabd9b1c3e8e">Không hợp lệ</div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-row">
                                                <td id="4x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="6a331d5b-9413-46f2-80bb-9cb5996f86f7">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="63c84fd5-ca04-4392-a46c-9f31fd8fb473">Hồ sơ 1</div>
                                                    </div>
                                                </td>
                                                <td id="4x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="068f155e-3f96-4ef9-a096-3ed061188dff">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="1771389d-b862-458f-aa3a-526b2edf4a4f">ho_so_1.pdf</div>
                                                    </div>
                                                </td>
                                                <td id="4x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="afe290a5-a7d9-4eda-9e30-1b69cdbb6eaa">
                                                        <div className="w-svg wbaseItem-value" level={11} cateid={115} id="71ab3584-0cb2-475c-8369-aa9383acb663"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                            <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                        </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td id="4x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d81fd3a0-a073-424d-9914-65464e8daf6a">
                                                        <div className="w-check-box wbaseItem-value" value="false" name-field="Checkbox" level={11} cateid={79} id="b8c955ee-f6dc-4525-b85e-857c9388fbf6"><input type="checkbox" id="input-b8c955ee-f6dc-4525-b85e-857c9388fbf6" name="Checkbox" /><canvas className="checkmark" checkcolor="ffffffff" width={20} height={20} /></div>
                                                    </div>
                                                </td>
                                                <td id="4x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="98f7d1df-9610-41c9-a026-1bdb56ab9904">
                                                        <form className="w-frame w-form wbaseItem-value w-row" wrap="nowrap" level={11} cateid={128} id="b914dfa8-077f-4682-9dfa-e8ebc992b2c3">
                                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="3a42ba9d-5bf8-464f-b12d-c5ea2f02e040">
                                                                <div className="w-radio-btn wbaseItem-value" name-field="a" level={13} cateid={90} id="27524d14-1277-415b-9946-35e75e3daee6"><input type="radio" name="a" id="input-27524d14-1277-415b-9946-35e75e3daee6" defaultValue /><span className="checkmark" /></div>
                                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="751bd612-0672-48fb-b22a-008c0b7065b7">Hợp lệ</div>
                                                            </div>
                                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="298cbad2-fd5e-4159-b63f-5afa0b71def8">
                                                                <div className="w-radio-btn wbaseItem-value" name-field="a" level={13} cateid={90} id="fd2fd62c-3326-4a7c-8a3b-5199f4022a3c"><input type="radio" name="a" id="input-fd2fd62c-3326-4a7c-8a3b-5199f4022a3c" defaultChecked defaultValue /><span className="checkmark" /></div>
                                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="86206b1d-37d8-493c-a449-bbd9a345316a">Không hợp lệ</div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-row">
                                                <td id="5x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d5b1e64d-f136-46b2-9721-d357172fde1f">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="99254191-551a-4e81-b266-530232fc6d8a">Hồ sơ 1</div>
                                                    </div>
                                                </td>
                                                <td id="5x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="5f0fbd12-ac34-472c-bd63-185ffa196011">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="13bf4447-a543-4e26-a55d-2040f31af099">ho_so_1.pdf</div>
                                                    </div>
                                                </td>
                                                <td id="5x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="258f3963-2199-4300-91ad-141f89f34da5">
                                                        <div className="w-svg wbaseItem-value" level={11} cateid={115} id="18072022-c628-438e-aca3-08948ccf74dd"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                            <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                        </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td id="5x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="dafa41cf-a352-4615-bcaf-b03e5ed8bbdc">
                                                        <div className="w-check-box wbaseItem-value" value="false" name-field="Checkbox" level={11} cateid={79} id="5053c6f5-dbf3-41ca-a29f-c05243f0aba4"><input type="checkbox" id="input-5053c6f5-dbf3-41ca-a29f-c05243f0aba4" name="Checkbox" /><canvas className="checkmark" checkcolor="ffffffff" width={20} height={20} /></div>
                                                    </div>
                                                </td>
                                                <td id="5x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="72cdf5c3-a584-4478-85ad-2dfc0a9da8ea">
                                                        <form className="w-frame w-form wbaseItem-value w-row" wrap="nowrap" level={11} cateid={128} id="31704e3a-1d83-4c42-ab47-a197978e43a0">
                                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="836c33e7-c83e-4197-a561-fdb5920aaa85">
                                                                <div className="w-radio-btn wbaseItem-value" name-field="a" level={13} cateid={90} id="90915a3a-05b7-441a-9464-7b42c5a6aaa9"><input type="radio" name="a" id="input-90915a3a-05b7-441a-9464-7b42c5a6aaa9" defaultValue /><span className="checkmark" /></div>
                                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="3cd52a3d-e21c-415a-add4-4d9b036f667b">Hợp lệ</div>
                                                            </div>
                                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="f5ca55b6-b1b0-4f29-a8f6-90c57a96bda9">
                                                                <div className="w-radio-btn wbaseItem-value" name-field="a" level={13} cateid={90} id="fddcc84f-8340-4d82-bc35-442cfef787f0"><input type="radio" name="a" id="input-fddcc84f-8340-4d82-bc35-442cfef787f0" defaultChecked defaultValue /><span className="checkmark" /></div>
                                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="2698a842-c675-4e4b-8a6d-4d26e5a0e5a9">Không hợp lệ</div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div ref={contentRef6} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="e9cc0c60-e99c-49cf-be24-e758140be641">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="bf6a540a-4ddd-4da6-ba27-b2c17edd2ca3">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="a1b0cff4-9f4b-430c-8943-2fbc7a06eee8">Lịch sử tín dụng tại các TCTD</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="13409082-8aff-4f27-a55b-0db5954e724e">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="2660c2b4-faaa-4d46-b346-da14a247069c">Tra thông tin theo CCCD</div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d139bd04-5fe7-47d4-9b4a-d70695ffc4e1">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="71608292-5cba-4b01-998b-f7dd1d3c1ff4">Thông tin CIC R11</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="a0d576c0-061d-4802-91e1-adef7e1dd275">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="c46d04ec-b609-4869-8a11-468ff467c569">Thông tin PCB</div>
                                        </div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="c4f4d663-ed70-4982-97e7-d17a1dbe3bad">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="a0d24190-ea17-49e0-9174-0ebd3f3c7322">Tra thông tin theo CMND 9 số</div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={10} cateid={29} id="3265f65c-39c5-4a0d-b78a-8fdf288cb95a">
                                            <div className="w-text wbaseItem-value" name-field="Text" level={11} cateid={139} id="7f8f365b-f9fd-4f60-b0d7-b90fd448c11e">Thông tin CIC S37</div>
                                        </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={10} cateid={29} id="95582e02-45ee-42aa-a470-26bba20ba26e">
                                            <div className="w-text wbaseItem-value" name-field="Text" level={11} cateid={139} id="27a6cad0-763e-4d07-b138-e9df70e619af">Thông tin CIC R11<br /></div>
                                        </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={10} cateid={29} id="f7c962fd-8bea-48e4-a761-2c872102cb8f">
                                            <div className="w-text wbaseItem-value" name-field="Text" level={11} cateid={139} id="f020a48f-06fe-402d-8b09-22c6e1aa96b5">Thông tin PCB</div>
                                        </button>
                                    </div>
                                </div>
                                <div ref={contentRef7} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="27997cb3-4bc3-4daa-86c5-ecbb4da9cda3">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="4aeaeb8b-40aa-41d8-beb6-4f6ab927b772">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="8c3ce38c-e1cd-45fb-a11c-d6566260c7bb">Lịch sử tín dụng tại JIVF</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="bed2caeb-1516-4ce7-b932-e8c46607bb5d">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="3fb6e932-9b66-4b12-94fc-aa68de53908d">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="3b36b666-2ca7-43d3-b22e-54aa5b38375c">Người vay</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="f6a351b4-9b99-40ee-9859-108304b38fbf">
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col6-xl col24-md" wrap="nowrap" level={11} cateid={140} id="37e5edf0-890b-4eea-9be0-7c3eaaee92b0">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="a2a40e31-abc7-46d4-b88d-34fbc22ccd68">Số điện thoại:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="7779879f-bada-4670-ab9a-b126d1b3e802">0123456789</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col6-xl col24-md" wrap="nowrap" level={11} cateid={140} id="75591eda-704e-4225-a2aa-96e54d1b6938">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="ce5491dd-9d85-4257-8bc9-aa2efce8977a">CCCD:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="03ebcee7-ebbf-4e49-b8bc-04714522f052">0123456789</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col6-xl col24-md" wrap="nowrap" level={11} cateid={140} id="82b629b4-f37b-4639-bc75-c3e9a8c5cf45">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="d0cf6a67-3357-48af-8f8e-3a779aee055a">CCCD/CMND cũ 1:</div>
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="90d9249f-4656-4832-9c75-cf5e1f084605">0123456789</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col12-lg col6-xl col24-md" wrap="nowrap" level={11} cateid={140} id="a7e2cedf-534e-4c22-bee0-26d72427da31">
                                                <div className="w-text wbaseItem-value" level={12} cateid={139} id="b0349e8e-0234-47c7-8b11-c6912db146ed">CCCD/CMND cũ 2:</div>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="6ab325de-8b49-4885-89ed-ec1b6745350a">
                                                    <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={13} cateid={85} id="facc87d5-9d37-4865-afcc-19f2935a6ce7">
                                                        <div className="wbaseItem-value" name-field="Textfield" level={14} cateid={86} id="bbaca8a2-cddb-4f42-a4e3-5a1120b14990">
                                                            <div className="textfield"><input id="textfield-bbaca8a2-cddb-4f42-a4e3-5a1120b14990" name="Textformfield" placeholder="CCCD/CMND cũ 2" /></div>
                                                        </div>
                                                    </div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={13} cateid={29} id="f3c1febf-b964-49ef-beed-b1dafebab5de">
                                                        <div className="w-svg wbaseItem-value" level={14} cateid={115} id="90b0093d-92df-4c49-b658-37d06c733fd4"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0432 16.3052C13.6693 17.4041 11.9267 18.0612 10.0306 18.0612C5.59543 18.0612 2 14.4658 2 10.0306C2 5.59543 5.59543 2 10.0306 2C14.4658 2 18.0612 5.59543 18.0612 10.0306C18.0612 11.9268 17.4041 13.6694 16.3051 15.0433L21.9999 20.7381L20.738 22L15.0432 16.3052ZM3.78458 10.0306C3.78458 6.58103 6.58103 3.78458 10.0306 3.78458C13.4802 3.78458 16.2767 6.58103 16.2767 10.0306C16.2767 11.7129 15.6116 13.2399 14.53 14.3629L14.3629 14.53C13.2399 15.6116 11.7129 16.2767 10.0306 16.2767C6.58103 16.2767 3.78458 13.4802 3.78458 10.0306Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                                                        </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="w-table wbaseItem-value" type={0} name-field="Table" level={9} cateid={117} id="cc92a4ad-2ae3-45ef-99f0-1e29de0ad83f">
                                        <tbody>
                                            <tr className="table-row">
                                                <td id="1x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="986b298f-5c2b-41a1-95f9-f8a0b897ab39">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="addbb75a-e5c7-42c6-8750-0ac3e6caedce">STT</div>
                                                    </div>
                                                </td>
                                                <td id="1x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="34197d2a-7baa-4235-b18d-e5d29b52111c">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="64aa06fc-4ca2-44e1-acb9-1f009f457bb8">Số CCCD/CMND</div>
                                                    </div>
                                                </td>
                                                <td id="1x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="006b93ba-0d5f-4d05-9459-3f492deb03e3">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="aedacf6e-fe90-4640-b1f0-da2e8528a3ff">CIF</div>
                                                    </div>
                                                </td>
                                                <td id="1x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="41815e93-1dd0-4fd7-883a-3a3bda757415">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="fc5dfaf9-9ea2-4bca-9ae3-1db7d868aed6">Tên khách hàng</div>
                                                    </div>
                                                </td>
                                                <td id="1x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="8b77c7fd-fa58-425e-a3d7-fe4b367ee535">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="278857d2-ab6c-4840-b2f6-8f182bbb5d90">Số HS bị từ chối</div>
                                                    </div>
                                                </td>
                                                <td id="1x6" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="af21121f-1718-4d14-a004-976c81317243">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="a25e219c-4400-4416-bfb5-098046afea01">Số HS được phê duyệt</div>
                                                    </div>
                                                </td>
                                                <td id="1x7" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="01444e34-99a3-43e2-b181-d3baae50ce99">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="84a2cf19-a602-4757-8f85-e880d3096b17">Số tiền vay được phê duyệt gần nhất</div>
                                                    </div>
                                                </td>
                                                <td id="1x8" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="99b250e3-d4e5-4326-bfef-898d533506b9">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="e39a5e7c-6f16-4436-b259-a4705a331c9b">Số kỳ đã trả của&nbsp; khoản vay gần nhất</div>
                                                    </div>
                                                </td>
                                                <td id="1x9" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="19245873-c911-400f-a919-b13cd8feb414">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="59baec26-354c-414d-bb38-6a59c5f53786">Số ngày trễ hạn hiện tại</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-row">
                                                <td id="2x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="0b4d73b6-b472-4e0e-a4e5-51156d70fdc1">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="3197e47c-32dc-4f35-a5e0-6f3615a31c48">1</div>
                                                    </div>
                                                </td>
                                                <td id="2x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="88328392-d635-4a11-8731-8bf1b50ba0d7">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="7a91870e-55f4-47fc-b18f-4679c8b4399b">000278682638</div>
                                                    </div>
                                                </td>
                                                <td id="2x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="7226999d-3938-45e6-ac94-192f1b5aea37">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="4d07f4dd-420f-4b5b-8712-5506b90a53b7">01234567</div>
                                                    </div>
                                                </td>
                                                <td id="2x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="1d22a327-db61-4382-996e-4d337ae316b6">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="cd5a44e1-75df-4539-b96e-f48ab16237ef">Nguyễn Văn A</div>
                                                    </div>
                                                </td>
                                                <td id="2x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="5dfa3c50-8ae7-486f-8bd4-42406aa6caac">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="e304924b-76f6-49a2-900f-e923b4f432f3">1</div>
                                                    </div>
                                                </td>
                                                <td id="2x6" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d1762038-bbf2-4a98-8c17-b9534c951b9f">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="7a7bd79b-a15d-47a1-b967-b5a160a672e5">1</div>
                                                    </div>
                                                </td>
                                                <td id="2x7" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="259bd218-31f7-4a67-9af7-e507d4b50cdd">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="7058b627-8d96-411d-a746-2be6107e9b01">10.000.000</div>
                                                    </div>
                                                </td>
                                                <td id="2x8" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="92f622b3-2c93-431a-a437-487b3eae868d">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="b7989a6d-24b7-4161-b8ba-36e4efd766dd">3</div>
                                                    </div>
                                                </td>
                                                <td id="2x9" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="054b315b-27f7-4e90-b6a3-feba26fcf9ec">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="d1c075b1-d793-4a47-a6af-13204ecee890">0</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-row">
                                                <td id="3x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="5b423e07-1e0f-4777-8d1e-809ea8aba51e">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="3c3a85d1-fac0-400b-9376-da236650f5af">1</div>
                                                    </div>
                                                </td>
                                                <td id="3x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="270d3599-7b21-4a1b-a5a7-9f5323be2e77">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="48b528c0-0555-4d13-ada5-8a9b8544940c">000278682638</div>
                                                    </div>
                                                </td>
                                                <td id="3x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="52474a3f-516f-4956-9569-7db245a86e0c">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="6b9770c3-d74e-4ad2-8fb7-74c0cff6fbba">01234567</div>
                                                    </div>
                                                </td>
                                                <td id="3x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="16e13477-b406-4a25-96c3-7055093b5041">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="9520621a-b15c-4978-b8b0-553322bc0e7d">Nguyễn Văn A</div>
                                                    </div>
                                                </td>
                                                <td id="3x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="c726acc6-6925-48a7-8dc8-dddb0ea4dffe">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="3540614c-9ce2-481f-b14e-24259f981bed">1</div>
                                                    </div>
                                                </td>
                                                <td id="3x6" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="ee96c225-c71c-4aa2-8c04-a42774832cbd">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="2c0a0e03-70ae-4c8d-a34a-1129e828431e">1</div>
                                                    </div>
                                                </td>
                                                <td id="3x7" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="36501381-1a87-4a40-a9d7-5924743ab9e6">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="823b57b0-49bc-4d72-b5ba-bfbb8f5c00a1">10.000.000</div>
                                                    </div>
                                                </td>
                                                <td id="3x8" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="89e8809c-b0f7-4c76-8580-28891b101079">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="d7dfffaa-1e33-4245-9d24-796b63cf226c">3</div>
                                                    </div>
                                                </td>
                                                <td id="3x9" className="table-cell" rowSpan={1} colSpan={1}>
                                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="0d5b36ec-0583-4e41-bcd8-8d4725739f61">
                                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="592d8feb-464b-4592-a589-0154149fd65e">0</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div ref={contentRef8} className="w-frame wbaseItem-value w-row" wrap="wrap" level={8} cateid={140} id="527fe9ee-2334-4940-8d36-8630d2a5861e">
                                    <div className="w-frame wbaseItem-value w-row col- col6-xxl col6-xl col24-lg col24-md" wrap="nowrap" level={9} cateid={140} id="9650fba9-05d1-431d-93fd-02bcb5f039ff">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="dd20b869-3ad4-49bd-ae08-ae53fb72448d">DTI</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row col- col6-xxl col6-xl col24-lg col24-md" wrap="nowrap" level={9} cateid={140} id="3427fb1d-9bea-4141-a8c5-57652e5117ec">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="68571243-cf2b-48bf-804e-a9ca5b78f209">DTI ban đầu:<br /></div>
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="5707ce71-8273-4b0f-bf42-d13f882814b0">66</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row col- col6-xxl col6-xl col24-lg col24-md" wrap="nowrap" level={9} cateid={140} id="87de4870-aef3-44e2-883e-bb6b554cfe2f">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="42553204-8fb4-4924-b7d9-634090343132">DTI điều chỉnh:</div>
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="5570d310-9525-4142-b367-c3dfe24b2075">70</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row col- col6-xxl col6-xl col24-lg col24-md" wrap="nowrap" level={9} cateid={140} id="62c41ad4-4925-488d-a503-0751c0712bd3">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="4fc49d74-bc1d-4410-aca0-a499f0de9c58">DTI thực:</div>
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="f0979e2c-9da5-4e9e-ac9f-dfbb3a7237d9">66</div>
                                    </div>
                                </div>
                                <div ref={contentRef9} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="375d5c85-f903-48be-82a8-c4471587cd9f">
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="2060cf28-ca68-40e4-bb0f-f99d99fab486">
                                        <div className="w-text wbaseItem-value" level={10} cateid={139} id="faad474e-0582-4696-b24b-54644dc9e128">Xếp hạng tín dụng</div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={10} cateid={29} id="231e09a4-4ff4-4a08-9a0f-8fcbfef700e2">
                                            <div className="w-svg wbaseItem-value" level={11} cateid={115} id="99fdad06-517c-4a5d-ac7c-cd07a4eaa540"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0432 16.3052C13.6693 17.4041 11.9267 18.0612 10.0306 18.0612C5.59543 18.0612 2 14.4658 2 10.0306C2 5.59543 5.59543 2 10.0306 2C14.4658 2 18.0612 5.59543 18.0612 10.0306C18.0612 11.9268 17.4041 13.6694 16.3051 15.0433L21.9999 20.7381L20.738 22L15.0432 16.3052ZM3.78458 10.0306C3.78458 6.58103 6.58103 3.78458 10.0306 3.78458C13.4802 3.78458 16.2767 6.58103 16.2767 10.0306C16.2767 11.7129 15.6116 13.2399 14.53 14.3629L14.3629 14.53C13.2399 15.6116 11.7129 16.2767 10.0306 16.2767C6.58103 16.2767 3.78458 13.4802 3.78458 10.0306Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                                            </svg>
                                            </div>
                                            <div className="w-text wbaseItem-value" name-field="Text" level={11} cateid={139} id="f8393b74-c4f6-4c4c-87e3-d4e2bb4d9e07">Xem điểm xếp hạng tín dụng</div>
                                        </button>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="c61e353b-480b-4fe9-9e0c-a572a2298e21">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="7f690c36-52bb-44f7-8fc1-f753f01f0718">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="dd421deb-52f6-45f0-9bd7-307eb6f92ce1">Điểm tín dụng:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="c5b1bf5d-827f-4f09-bc93-4fa0c280efee">-</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="82ae570e-64d4-43dc-bec1-54755836e514">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="f0c62be1-0dee-4e46-a274-653209efb250">Xếp hạng:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="eccce671-81f5-4756-87d5-d82713c004a0">-</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="96dacc67-299b-4588-a1c6-1c825d260acb">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="335ddc45-da33-4df3-9e2c-43e5d695177a">Kết quả:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="07e6484d-06ff-49fd-b1b2-c9f157bdee51">-</div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={contentRef10} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="3764eb84-b8f2-4aaa-a6a4-3e0d0ad94b00">
                                    <div className="w-text wbaseItem-value" level={9} cateid={139} id="f8c0f24d-c280-4500-b8be-7ce04249ba78">Ý kiến thẩm định</div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="b8df564b-4dc3-403b-a000-5209ed805bd0">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d2be1655-b51e-4e9d-bfb2-865eccdea6a9">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="2fdf3445-b8e5-43cd-9c78-0dadd89333a5">Tổng số tiền vay:<br /></div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="e588338d-1f0f-4c6a-84a3-0e7e5e1bf32f">150.000.000 VND</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="12129d2a-8c97-4f05-8acc-58ff6cabb841">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="7847ef3c-bcc2-4238-a48f-65fc9af4bc91">Kỳ hạn vay:</div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="3d51c107-1650-4f08-a35e-1522633449e8">36 tháng</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="dc573976-8bdf-4d1e-801f-a3352fe01688">
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="2fd03b28-a865-42d0-982e-a5129bd7d3ef">Lãi suất:<br /></div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="265dfc1c-3ead-4c50-b130-337405477321">8.1%<br /></div>
                                        </div>
                                    </div>
                                    <form className="w-frame w-form wbaseItem-value w-row" wrap="nowrap" level={9} cateid={128} id="96c1e427-2e66-48b3-9086-faf4dfb6cf41">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="21c1e8fa-6d2c-479d-9683-0b75b0f94cba">
                                            <div className="w-radio-btn wbaseItem-value" name-field="a" level={11} cateid={90} id="08610004-1168-4e33-b0f8-ccbf717154ea"><input type="radio" name="a" id="input-08610004-1168-4e33-b0f8-ccbf717154ea" defaultValue /><span className="checkmark" /></div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="4da874e0-28b8-4b06-8888-97f26e7b6550">Đồng ý</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="20fcbd90-143a-4905-a953-6d581ec2b53f">
                                            <div className="w-radio-btn wbaseItem-value" name-field="a" level={11} cateid={90} id="f9ddf9f5-4ada-413c-b230-c0a75849e1b6"><input type="radio" name="a" id="input-f9ddf9f5-4ada-413c-b230-c0a75849e1b6" defaultValue /><span className="checkmark" /></div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="3f8c3376-3093-470c-9442-98c38f55d72c">Yêu cầu bổ sung<br /></div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="4f4d0dfc-ee20-4b75-9c65-7735d370b2fa">
                                            <div className="w-radio-btn wbaseItem-value" name-field="a" level={11} cateid={90} id="585c2339-a78c-44f6-9855-f8f7a62be8f4"><input type="radio" name="a" id="input-585c2339-a78c-44f6-9855-f8f7a62be8f4" defaultChecked defaultValue /><span className="checkmark" /></div>
                                            <div className="w-text wbaseItem-value" level={11} cateid={139} id="4e7e16ae-4cfc-4ade-bd0a-5fcec1d94033">Từ chối</div>
                                        </div>
                                    </form>
                                    <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={9} cateid={85} id="f4263209-e5f9-433c-9e43-3c2a30ba4e1f">
                                        <div className="wbaseItem-value" name-field="Textfield" level={10} cateid={86} id="80272964-4da6-49ed-87b0-734d1f7471ef">
                                            <div className="textfield"><input id="textfield-80272964-4da6-49ed-87b0-734d1f7471ef" name="Textformfield" placeholder="Nhập yêu cầu bổ sung" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={3} cateid={140} id="0eac0dca-3bab-488f-ab7a-50862d341b71"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={4} cateid={29} id="7a19477a-7152-4e9f-9d8b-b208d506f8d2">
                <div className="w-text wbaseItem-value" name-field="Text" level={5} cateid={139} id="3932a273-dd64-4be1-b622-620ce5aaf1a1">Thoát</div>
            </button>
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="588f772f-ecba-453b-9540-f4ed2843cff5">
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={5} cateid={29} id="221501ed-8c9f-4f1a-b4c1-a33793479228">
                        <div className="w-svg wbaseItem-value" level={6} cateid={115} id="0a19eae9-3fbf-4766-a558-bd374a574d37">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1665 2H6.49997C5.83694 2 5.20106 2.26339 4.73223 2.73223C4.26339 3.20106 4 3.83694 4 4.49997V21.5831C3.99996 21.6577 4.01993 21.7309 4.05783 21.7951C4.09572 21.8593 4.15015 21.9122 4.21545 21.9482C4.28074 21.9842 4.35449 22.002 4.42902 21.9998C4.50355 21.9976 4.57612 21.9754 4.63916 21.9356L12.3332 17.0765L20.0273 21.9356C20.0938 21.9779 20.171 22.0002 20.2498 21.9998C20.3603 21.9998 20.4663 21.9559 20.5445 21.8777C20.6226 21.7996 20.6665 21.6936 20.6665 21.5831V4.49997C20.6665 3.83694 20.4031 3.20106 19.9343 2.73223C19.4654 2.26339 18.8295 2 18.1665 2V2Z" fill="#28282999" />
                            </svg>
                        </div>
                        <div className="w-text wbaseItem-value" name-field="Text" level={6} cateid={139} id="143e090d-4ae3-4087-9988-21220006d620">Lưu</div>
                    </button>
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={5} cateid={29} id="538c1402-f3bf-4287-a5eb-927ba85902a6">
                        <div className="w-svg wbaseItem-value" level={6} cateid={115} id="f50d701b-f2fd-4d11-bdd2-5b3a6a728b21"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.38 22.0033C14.2031 22.0033 14.0296 21.954 13.879 21.861C13.7284 21.7681 13.6066 21.6351 13.5272 21.4769L10.7005 15.8207C10.6242 15.6678 10.5904 15.4973 10.6024 15.3268C10.6143 15.1564 10.6718 14.9923 10.7687 14.8515L15.3329 8.66893L9.15029 13.2313C9.00974 13.3282 8.84576 13.3857 8.67546 13.3977C8.50515 13.4097 8.33474 13.3758 8.18199 13.2995L2.52401 10.4728C2.35846 10.3894 2.22085 10.2594 2.12803 10.099C2.03521 9.93849 1.99122 9.75443 2.00145 9.56933C2.01168 9.38422 2.07569 9.20612 2.18562 9.05685C2.29556 8.90758 2.44665 8.79362 2.62038 8.72894L20.7181 2.05901C20.8888 1.99593 21.074 1.98311 21.2518 2.02206C21.4296 2.06102 21.5925 2.15012 21.7212 2.27882C21.8499 2.40751 21.939 2.5704 21.9779 2.74818C22.0169 2.92596 22.0041 3.11118 21.941 3.28189L15.272 21.3805C15.2078 21.5549 15.0939 21.7066 14.9444 21.8169C14.795 21.9273 14.6165 21.9915 14.431 22.0015L14.38 22.0033Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                        </svg>
                        </div>
                        <div className="w-text wbaseItem-value" name-field="Text" level={6} cateid={139} id="6750a06f-76fe-49ae-ae93-8ab0d228e665">Gửi</div>
                    </button>
                </div>
            </div>
        </div>
    );
}