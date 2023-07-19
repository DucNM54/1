import { useEffect, useRef } from 'react';
import '../../css/xemHoSo-Vay.css';
import { NavLink } from 'react-router-dom';
export default function XemHoSoVay() {
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
    const contentRef11 = useRef(null);
    const contentRef12 = useRef(null);

    const scrollToContent = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // scrollToContent();
    }, []);

    return (
        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={3} cateid={140} id="7dcf7726-8f85-4c1e-ad93-0c79208123aa">
            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="7b371d39-4846-4209-8c3f-17941b7a5c2a">
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={5} cateid={140} id="534e7e35-deec-467e-bd1c-e5d7e30c38b6">
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="8e39e352-3269-4cf9-a1d4-58d3cfeeb4af">
                        <div className="w-text wbaseItem-value" level={7} cateid={139} id="0aa7c9f5-7d39-4d75-b7d3-00e33ce3511e">Chi tiết hồ sơ</div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="6379f6d9-a34a-4b67-8bbe-d60d98acd1d0">
                            <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="8fffebd5-fc06-4b11-9041-ba175df0f7b9">Hoàn thành</div>
                        </button>
                    </div>
                    <div className="w-frame wbaseItem-value w-row breadcrumb" wrap="nowrap" level={6} cateid={140} id="7a9a238f-d60c-4e6e-b3e9-44603feaca7d"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="73ebb123-651f-4719-8fd4-3a4d837eacca">
                        <NavLink to="/admin/danh-sach-ho-so-vay" className="nav-link wbaseItem-value event-click" name-field="Text" level={8} cateid={139} id="3619fe4f-d576-47dc-9c86-d26a00fce0ca">Danh sách hồ sơ vay</NavLink>
                        <div className="w-svg wbaseItem-value" level={8} cateid={115} id="f7e236ab-9ff7-435a-a2f3-06196a4aa537"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32236 4.04408C8.96293 3.65197 8.37041 3.65197 8.01097 4.04408C7.66301 4.42368 7.66301 5.03087 8.01097 5.41046L14.0514 12L8.01097 18.5895C7.66301 18.9691 7.66301 19.5763 8.01097 19.9559C8.37041 20.348 8.96293 20.348 9.32236 19.9559L15.989 12.6832C16.337 12.3036 16.337 11.6964 15.989 11.3168L9.32236 4.04408Z" fill="#28282999" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                        </svg>
                        </div>
                    </button>
                        <div className="w-text wbaseItem-value" level={7} cateid={139} id="97047907-7868-4d03-bd8e-1e6e0c6f4338">Chi tiết hồ sơ</div>
                    </div>
                </div>
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="d93085fe-6f48-493b-b83c-e19c9e37ea9d"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={6} cateid={29} id="861c454f-73bd-4ea8-9d87-54110e9bbdcc">
                    <div className="w-svg wbaseItem-value" level={7} cateid={115} id="2dd7da00-6fc9-45a1-b099-0631bce852f2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4167 6.33333L9.91667 3H2.83333C2.61232 3 2.40036 3.0878 2.24408 3.24408C2.0878 3.40036 2 3.61232 2 3.83333V18.8333C2 19.4964 2.26339 20.1323 2.73223 20.6011C3.20107 21.0699 3.83696 21.3333 4.5 21.3333H19.5C20.163 21.3333 20.7989 21.0699 21.2678 20.6011C21.7366 20.1323 22 19.4964 22 18.8333V7.16667C22 6.94565 21.9122 6.73369 21.7559 6.57741C21.5996 6.42113 21.3877 6.33333 21.1667 6.33333H12.4167Z" fill="#28282999" />
                    </svg>
                    </div>
                    <NavLink to={"/ho-so-vay"} className="nav-link w-text wbaseItem-value" name-field="Text" level={7} cateid={139} id="bd446b0b-144f-427e-91b7-4ff0a548295b">Xem hồ sơ ban đầu</NavLink>
                </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={6} cateid={29} id="79c4aa9e-434f-4c41-8722-c3988656f4a3">
                        <div className="w-svg wbaseItem-value" level={7} cateid={115} id="ffa7a1f8-6031-4ce6-ab8d-9ae188f894d7"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5.33333V7H5.6V12H8V13.6667H5.6V18.6667H8V20.3333H4.8C4.3584 20.3333 4 19.96 4 19.5V2.83333C4 2.37333 4.3584 2 4.8 2C5.2416 2 5.6 2.37333 5.6 2.83333V5.33333H8Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                            <path d="M10.3996 8.66699H19.1996C19.6412 8.66699 19.9996 8.29366 19.9996 7.83366V4.50033C19.9996 4.04033 19.6412 3.66699 19.1996 3.66699H10.3996C9.95801 3.66699 9.59961 4.04033 9.59961 4.50033V7.83366C9.59961 8.29366 9.95801 8.66699 10.3996 8.66699Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                            <path d="M19.1996 22H10.3996C9.95801 22 9.59961 21.6275 9.59961 21.1667V17.8333C9.59961 17.3725 9.95801 17 10.3996 17H19.1996C19.6412 17 19.9996 17.3725 19.9996 17.8333V21.1667C19.9996 21.6275 19.6412 22 19.1996 22Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                            <path d="M10.3996 15.333H19.1996C19.6412 15.333 19.9996 14.9605 19.9996 14.4997V11.1663C19.9996 10.7063 19.6412 10.333 19.1996 10.333H10.3996C9.95801 10.333 9.59961 10.7063 9.59961 11.1663V14.4997C9.59961 14.9605 9.95801 15.333 10.3996 15.333Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                        </svg>
                        </div>
                        <div className="w-text wbaseItem-value" name-field="Text" level={7} cateid={139} id="225288cc-95c5-455e-8809-67bdb0b2e4af">Xem quy trình</div>
                    </button></div>
            </div>
            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={4} cateid={140} id="86e905e6-a1bc-457a-8699-34f1f8e380f1">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="22c93cea-22e5-46d2-9c6b-d0b3972a742a">
                    <NavLink to="/admin/danh-sach-ho-so-vay/xem-ho-so-vay " type="button" className="nav-link w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={6} cateid={29} id="1b266bb2-12cd-4afb-bc1c-7c39240ff4c2">
                        <div className="w-text wbaseItem-value" name-field="Text" level={7} cateid={139} id="222a412b-de24-49b1-a8d5-5076b21d3802">Hồ sơ vay&nbsp;</div>
                    </NavLink>
                    <NavLink to="/admin/danh-sach-ho-so-vay/xem-ho-so-hop-dong-tin-dung" type="button" className="nav-link w-button wbaseItem-value w-row event-click" wrap="nowrap" name-field="Button" level={6} cateid={29} id="ee4e39f1-4521-4808-a5ff-0d8c3de5a956">
                        <div className="w-text wbaseItem-value" name-field="Text" level={7} cateid={139} id="4053a1ac-d132-461f-a7bd-600d8293c004">Hợp đồng tín dụng</div>
                    </NavLink>
                    <NavLink to="/admin/danh-sach-ho-so-vay/xem-ho-so-giai-ngan" type="button" className="nav-link w-button wbaseItem-value w-row event-click" wrap="nowrap" name-field="Button" level={6} cateid={29} id="ee1bc233-ad99-4c7a-8119-f0980a74ba03">
                        <div className="w-text wbaseItem-value" name-field="Text" level={7} cateid={139} id="4c8b3a59-4b26-4dec-ab2f-7bb73320a22e">Hồ sơ giải ngân</div>
                    </NavLink>
                    <NavLink to="/admin/danh-sach-ho-so-vay/xem-ho-so-tham-dinh-giai-ngan" type="button" className="nav-link w-button wbaseItem-value w-row event-click" wrap="nowrap" name-field="Button" level={6} cateid={29} id="585e7a7e-5d94-46a2-bad6-42d7a25fd996">
                        <div className="w-text wbaseItem-value" name-field="Text" level={7} cateid={139} id="4edbf3db-6521-4e26-abe2-7c6ea156aa7f">Thẩm định giải ngân</div>
                    </NavLink>
                </div>
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="51572277-2d87-4320-acee-4da13b7e5471">
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={6} cateid={140} id="8fd7528e-424c-417a-90aa-40b86468c294">
                        <div onClick={() => scrollToContent(contentRef1)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="d5d4c55f-12ad-4967-9381-96e47304a7fe">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="1a1401c7-e52d-4ecb-8cfe-e041417171b3">Thông tin eKYC khách hàng</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef2)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="4c590bba-c1b6-4e8d-b6c2-6e42d55d62e6">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="25b50872-0306-4ea9-98b2-33edb4e9b309">Chương trình vay và sản phẩm</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef3)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="2a2859a7-d93d-40e6-864b-178d5409958f">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="bb0e3575-8504-4496-989c-95cddf59c840">Thông tin hàng hóa</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef4)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="7c2cf7d2-0d8a-4930-b497-6e40bcbd5ab3">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="7673c965-3bfc-40a9-8f14-3d8f44555d15">Thông tin khoản vay</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef5)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="caa74803-c073-4ef8-9a3d-ea47934584ef">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="23aa8220-0780-4551-8dca-ff0b81fe18f7">Bảo hiểm</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef6)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="e66e4817-e508-4190-a088-9615d957902a">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="9ca45285-de1c-4958-8ced-735591743420">Sản phẩm bán kèm</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef7)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="125098f8-f73b-420d-a2aa-4e84f2fe5bf4">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="e91b7754-0cfd-492d-93fc-846f40d43cea">Thông tin khách hàng bổ sung</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef8)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="6d7074aa-e987-457a-abfa-2a4fa3836c4c">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="b04e3d82-a825-47c8-b813-19f27c95cfd6">Công việc khách hàng</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef9)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="bd57bfd8-c400-4671-985b-f3161bf1e616">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="73c35065-c9a4-499c-9863-8d5d13810e47">Tài chính khách hàng</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef10)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="426a782b-fe8e-4380-b8eb-29e132baeced">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="dc92a664-0cad-4f7b-b628-daa8dd81f19f">Người liên quan</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef11)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="0542956e-1041-4c13-9ef0-b966777d7dab">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="777d5e71-8c68-4794-88ea-2dcff760a32b">Hồ sơ đính kèm</div>
                        </div>
                        <div onClick={() => scrollToContent(contentRef12)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={7} cateid={140} id="a5b35bb1-2c35-42f9-afc9-32d74714e13b">
                            <div className="w-text wbaseItem-value" level={8} cateid={139} id="0a2555b1-96a4-492c-9d6f-977f45564439">Ghi chú</div>
                        </div>
                    </div>
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" scroll="true" level={6} cateid={140} id="f107e9df-2778-4c0d-a733-2edda116525c">
                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={7} cateid={140} id="d1cbf29c-4186-42e6-a323-49af6c65e5a4">
                            <div ref={contentRef1} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="ffd208f4-7d75-477d-a410-934333d75e6b">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="e141a5b0-896d-4afa-b98b-b1cd932db41f">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="1077df54-23a5-4509-82f3-11faa6389f84">Thông tin eKYC khách hàng</div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="5e651f6f-885f-49c0-bb97-233f576d43e0"><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={11} cateid={29} id="44946b02-92ab-4cfa-8a14-2ec8cb5f849b">
                                        <div className="w-svg wbaseItem-value" level={12} cateid={115} id="726d581d-92f5-40e7-af4a-7465347fcb93"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.22093 21L1 13.8069L4.2907 10.529L8.22093 14.4556L19.7093 3L23 6.27799L8.22093 21Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                                        </svg>
                                        </div>
                                        <div className="w-text wbaseItem-value" name-field="Text" level={12} cateid={139} id="f8fe5080-17a2-42a6-a63b-d985b2bf11c6">eKYC</div>
                                    </button><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={11} cateid={29} id="bed85fc2-d91c-4473-94d2-d6bc3e6c94e9">
                                            <div className="w-svg wbaseItem-value" level={12} cateid={115} id="923771dc-bb26-4ba6-aa7b-82e801926804"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.22093 21L1 13.8069L4.2907 10.529L8.22093 14.4556L19.7093 3L23 6.27799L8.22093 21Z" fill="#009944FF" style={{ mixBlendMode: 'multiply' }} />
                                            </svg>
                                            </div>
                                            <div className="w-text wbaseItem-value" name-field="Text" level={12} cateid={139} id="44d49817-c7f6-4048-88fe-108f628b0571">CIC</div>
                                        </button></div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="392da125-9dd4-4757-8951-e92f3cfe904b">
                                    <div className="w-rect wbaseItem-value" level={10} cateid={138} id="5059f1ff-6a5f-4723-a414-e09d6fbdc7d3" />
                                    <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="69101648-e785-40da-9ba8-88c8561b536f">
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-md col12-lg" wrap="nowrap" level={11} cateid={140} id="e5ff1486-7571-40bb-8edb-5ae57b9d8768">
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="23393754-8527-4d75-b79c-6c6e3973b54c">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="5042acc6-8d31-4dfd-9933-c1d90400cabe">Họ và tên:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="811e885d-5aa6-4951-ad08-34d7380ab901">Nguyễn Hoàng Duy</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="b3e9c2ca-89cd-4525-9708-f35598bdaa0e">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="858e7b3c-91df-4872-a24b-26c46bac48a2">Giới tính:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="5ba54682-b382-4635-a4d7-09872bbb4dd1">Nam</div>
                                            </div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-md col12-lg" wrap="nowrap" level={11} cateid={140} id="a9b6cbfe-213b-4d05-b7ac-df9fc00a212f">
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="556659ef-e114-427e-a106-6f7cf1dcd53a">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="997c0d8d-af77-4ca1-b97c-a5d5401b6092">Số CMND đã được cấp:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="47fa0458-87ab-4ceb-af04-1585d84b0551">1234567890</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="18263280-5370-4bb6-ae6b-67a9d0a45c8f">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="d645e206-db36-4857-9ed2-a5da402aad43">Ngày sinh:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="5c191a29-2c27-46fc-bf91-b17ebf63330e">11/11/2001</div>
                                            </div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-md col12-lg" wrap="nowrap" level={11} cateid={140} id="cfa35b17-0d94-4193-a2d8-4c94731d2e8a">
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="8461b118-1f22-4db4-b026-1b43bf834aaf">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="00b41563-c471-4860-a0e4-c2a0567f6de0">Quốc tịch:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="ff0db505-7538-45bc-b6c4-3bffca649dad">Việt Nam</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="24430ea3-d2f2-4313-8f70-9351f8e0ffcf">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="9d59a3b3-4706-4ec5-8381-1413f28d8ff1">Quê quán:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="47c7bb20-607a-4d49-9c01-3709dc90e55b">11 Thái Hà, Đống Đa, Hà Nội</div>
                                            </div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-md col12-lg" wrap="nowrap" level={11} cateid={140} id="8e784487-5daa-4737-ad94-c5d3f7b1fc45">
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="fb266b9e-206f-484e-a937-cde04e4bf14d">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="f60966dd-6fbe-4ca5-aeba-b636e5caf5bd">Số CCCD:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="7125f897-8442-4ed5-a7f3-2fda918d977f">1234567890</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="dc5f3824-765a-4fab-8c2b-78d4aed3ebe8">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="efd7f64b-6d17-46d2-a3cd-79dc1c6f9fd1">Ngày cấp:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="96476cef-0ded-4c41-96e7-003346a30d8e">11/11/2001</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={12} cateid={140} id="388a2580-f6ee-41f6-91ff-9cfa29020d2b">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="eb1e15d0-b691-4522-a7dc-c2f46f153830">Ngày hết hạn:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="f2d9c0f4-ded7-40c6-98bf-72aaf3ced1a2">11/11/2001</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef2} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="713eca9d-fd28-4b4d-9ee7-a38c158888be">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="dfab8b4c-7eda-444d-9dc7-9327a6807cc0">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="bcd92eca-4f30-4753-b6c0-07e0c245d62e">Chương trình vay và sản phẩm</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="52dec175-fa81-4205-a645-fda328406d88">
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="e8e2bc20-1bc8-4cf9-a61d-5eeda47503f8">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="def24e03-db83-439a-b6e9-b361f0016d0d">Nhóm sản phẩm vay:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="8dc5f247-c517-43f3-b9ea-030fa6c3c9b9">Nhóm sản phẩm 1</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="34ada7ab-23c6-490a-8023-247905d9d2ec">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="e632812c-c58c-4002-98d3-522ebc8af493">Sản phẩm vay:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="5bc94352-5567-4bab-849a-2ed0cb76b03e">Sản phẩm 1</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="f0bedac9-d21f-43db-ab55-1472a609aa7d">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="6ed2dbfe-db0f-4dde-9b67-699d66b3ad4d">Đại lý:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="d9298bde-590e-4b44-b263-9b82e9bc6e75">Hà Nội</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="b8a421a0-752a-4fcd-b3e2-17c0af588445">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="defe74a5-84d1-444c-9d5b-bbce86e491eb">Chương trình vay:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="ee5831ea-842c-4d9a-a19c-8bdb01f45f3c">Chương trình vay 1</div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef3} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="535d042d-aa39-486d-89af-c73aba9e1aed">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="4ccfd218-abf5-4322-8702-9fa37f5e02b9">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="d16b3dd3-62fa-426d-95b4-583fd4d83147">Thông tin hàng hóa</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="a14f2be0-160d-4487-8e35-32b5df4a9ae6">
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="d3b2d15c-9760-4ead-a1e1-86fe799d1d2e">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="e2109cb8-b60e-4db1-9f9a-3a73346ff85d">Nhà sản xuất:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="ac310a24-0090-4188-be5a-8cd0b4e7338d">NSX 1</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="b21b56a7-666b-4fa2-b708-cda4edf433e5">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="3d24b642-4d36-4e87-8a04-01f95d1ddbcb">Nhãn hiệu:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="f4f5a4de-1402-42ef-8d1e-12063ad76f58">Nhãn hiệu 1</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="3f7797b8-408e-4652-bbd9-56059f690910">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="b8ea23f8-0a4d-4c42-b091-c7524128dfbf">Năm sản xuất:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="50b7c1e1-2877-426d-bc0e-b0171e5ecda7">NSX</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="3625953f-bbc9-48f4-944f-5be83ba4e748">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="b3ed84a6-4d50-468c-ba7d-93c1464b0083">Màu sắc:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="fd2d8939-eb85-4549-a1e1-510052c5df7f">Đỏ</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="9bd0e13e-b894-41ff-8715-62e7442e48a3">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="78288ba0-8b5c-492b-9c56-aace21741cd0">Giá bán xe:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="2213a6b7-c37e-4632-8b36-b1928183f317">15.000.000&nbsp;VND</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="9db42214-6670-4c7c-923e-370d0d508b16">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="29c5c482-079f-4172-8003-885f14e730ca">Phụ tùng phụ kiện kèm theo:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="d5aadb3b-6fb7-4fa6-979a-14ba97906f26">Phụ kiện</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="29e86160-b5e1-489f-989c-156ee294890a">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="3bc075f8-e8cc-44dc-ba2f-978e3280dc9d">Giá bán phụ tùng phụ kiện:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="9c4749f2-26af-4c3f-9aeb-45ac25570ccc">500.000&nbsp;VND</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="aa19157c-862e-4db6-b803-ccba3acb1e1b">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="2de21c8e-2def-4c4b-818e-4b8b124fcc64">Tổng giá bán (VND):</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="4f2b0f47-2db3-40d3-a243-6c53bbdce7bc">15.000.000&nbsp;VND</div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef4} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="0dced7f1-ae3f-4deb-9fcb-67e8f182da18">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="fcbb1635-f0dc-474c-9a2e-a11c193f3843">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="584e5f43-8d52-4083-93b4-80eca292be9e">Thông tin khoản vay</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="1c9a85d4-c739-44d4-97a9-616fc00c78c7">
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="5411cf93-ad05-4bd0-84c3-6be4836c4af4">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="c96b0d02-0516-42d6-ac12-b59f4676431c">Tỷ lệ % trả trước:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="6f0135ea-925b-4070-8610-f6627b1d2181">5%</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="55aa8da6-dc6d-4d68-9242-bf0bdba56f4e">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="0b12c16e-245b-434e-a800-2023c5bbdfab">Số tiền trả trước:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="5e9f3b4e-efbe-44fe-9f9b-9ab41b91374b">500.000&nbsp;VND</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="2fc31b79-ac90-49b9-8815-56842b7f8bc1">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="71154be1-f2e9-4911-b6bd-208300302969">Ngày hợp đồng dự kiến:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="3ee73df6-0b91-47b2-bf99-40ee6b582a7b">11/11/2001</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="a89c654b-4e30-44b6-81c9-7c81fc8746cf">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="fde47246-dc19-46a8-b276-3625017dec7d">Ngày thanh toán hàng tháng:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="1d96634f-02c4-479c-9616-ddbd90a9b879">21</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="7354cf39-fe21-4e88-915d-892e307cdcb4">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="6fbcaa69-3c06-444c-a0f6-d8e73ea7b6cb">Số tiền vay gốc:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="33013774-553a-4bad-952a-81a1f6cdc6f6">15.000.000&nbsp;VND</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="e23753d6-cb2f-4896-9bd4-5bc916872a70">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="b5986140-65ee-4805-b0e4-697a554b160b">Mục đích vay:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="33f39de5-d647-48c4-a80a-a283c4f24f8d">Mua xe</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="d7e4fd76-9942-4a6a-85cd-3f7d94f484dd">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="e9aedb03-56a0-418e-8899-1856ed33edea">Kỳ hạn vay:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="400f8090-eed2-4c1a-99e6-5f575716eb17">36 tháng</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="9d1b7788-32da-4c64-8e4b-c200811970fc">
                                        <label className="w-switch wbaseItem-value" value="false" name-field="Switch" level={11} cateid={81} id="a7c12f58-7c4c-4a1a-8a96-6bd8ad62bfce">
                                            <input type="checkbox" id="input-a7c12f58-7c4c-4a1a-8a96-6bd8ad62bfce" name="Switch" />
                                            <span className="slider" style={{ backgroundColor: 'rgb(255, 255, 255)' }} /></label>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="c39d9b5f-50be-4e49-8250-6af3be233fd1">Khách hàng thực hiện thanh toán&nbsp;khoản vay cũ</div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef5} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="518d22c3-f58c-4718-977a-b10b578bcae1">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="61580a1e-ad18-4c8e-a431-782681c82435">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="48443312-7e3e-4814-ad39-e2bec632493a">Bảo hiểm</div>
                                    <div className="w-svg wbaseItem-value" level={10} cateid={115} id="a6964013-e008-4669-a165-de1812a6a168"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3899 15.7544L12 10.0693L5.61015 15.7544C5.24205 16.0819 4.65327 16.0819 4.28517 15.7544C3.90494 15.4161 3.90494 14.8584 4.28517 14.5201L11.3375 8.24562C11.7056 7.91813 12.2944 7.91813 12.6625 8.24562L19.7148 14.5201C20.0951 14.8584 20.0951 15.4161 19.7148 15.7544C19.3467 16.0819 18.7579 16.0819 18.3899 15.7544Z" fill="#28282999" />
                                    </svg>
                                    </div>
                                </div>
                                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="959bad68-9daa-4c69-8e65-0bfa8bba9a0d">
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="21520a0e-c8fc-4a9a-8c44-28da713dc504">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="bf7f153b-fb09-4b5d-a805-0fd48d7856ad">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="deedfa77-452c-4293-85eb-ec34be9d1dbe">Bảo hiểm bắt buộc</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={11} cateid={140} id="d6f9c890-59df-4354-a5e0-21552e5f1cc6">
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="7be1d26d-aa22-4317-b526-fa5023cbee4d">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="839c147e-94e8-440f-a659-73fc4141c8e7">Nhà cung cấp:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="b7b5d253-23c8-4352-beda-1fefb850560a">VIC</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="0d1b3e9b-0dff-4113-b0ad-eef203f52ec8">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="203b35f8-1bbf-45b2-b6e4-7a7e09090ee6">Loại sản phẩm:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="cbf6eda2-1134-4828-8931-2ae9d03e242f">Bảo hiểm điện tử</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="27a6bbef-2158-4267-a47d-8a0e4b40911d">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="19505fac-6319-4063-95bd-fb22bf8d8201">Tên sản phẩm:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="ca0725ce-9704-40f8-bafa-369bc7039c0a">Bảo hiểm điện tử</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="6d6f3aab-dd36-47c7-ba43-d5cdd33ecab5">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="63c5eec8-e1cf-4600-9fe7-edaf0f5e272e">Phí bảo hiểm tạm tính (VND):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="c0d815a6-68f5-431e-b948-aaa5299b83ac">15.000.000</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="83177605-c369-466e-a38e-4b30a2715391">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="e3eb7d2d-485d-4245-bba1-72591e67f320">Bảo hiểm theo:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="61983f1a-f53d-4fe9-9876-26bcb47750c1">Giá trị sản phẩm</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="96f7286d-43b2-4791-a796-a250957477d2">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="8b360383-9202-4950-a7b4-92dc95d86bb9">Tỷ lệ bảo hiểm (%):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="090afb96-88b0-426c-a7f7-dc637e5d6959">15</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="0b7ca998-714c-4643-aa89-535b1eb4b0cc">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="b940b3c4-1233-4a9c-a75d-5cd5a006c970">Hình thức thanh toán:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="15647061-d5a4-4937-96b9-e41298415189">Trực tiếp</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="1dabefe4-884d-4c46-8953-97b8b23dc2c4">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="443c33ca-ff17-43b2-936c-8639d6ca178d">Số tiền bảo hiểm tạm tính (VND):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="40e3208c-cf81-42c4-89a0-0c39eef2da96">15.000.000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="2535adec-e842-4e19-9bbc-20c34640f082">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="7e5c241c-53bc-4c2e-843e-eee7be40636f">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="c6562cb7-a88d-4085-9b77-8c5bbcad51a7">Bảo hiểm bắt buộc</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={11} cateid={140} id="f5f68f2e-c104-4bc2-97e0-8284263626a3">
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="44c3ea98-26f7-4b9d-abd1-edfcd6e8e013">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="f5c4f819-1634-48a5-8e97-5fed3cb6471b">Nhà cung cấp:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="1fe99e85-7562-4dbd-9dd5-6bd5704dcd5e">VIC</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="841a99ef-5233-4aae-9550-ad1c5d2bb2ca">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="35f16bd8-8819-483e-a8ce-147a4b11500b">Loại sản phẩm:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="adfb792e-ffc9-403e-a8ec-8cf4b236fd55">Bảo hiểm điện tử</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="6d065935-92d2-4208-ae09-bde8fbbcdf4b">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="ae7b1ddc-d1d6-420c-9588-01cf8c0d56d1">Tên sản phẩm:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="916891f6-e4a9-4ca9-88b0-9805912078a9">Bảo hiểm điện tử</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="28cd1704-3f79-40f7-83c0-f307aea242bb">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="a31bb4e5-146b-4742-adc5-e8957bb652d1">Phí bảo hiểm tạm tính (VND):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="0d2b19fe-6e3b-44cd-8891-0b0aa56f2da8">15.000.000</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="63fdd6b0-56c3-4bdf-8cf1-0c51eb6387b6">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="6c934d42-89cd-4d1b-a9a3-647dfcf4040c">Bảo hiểm theo:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="8fdf8607-3268-460c-b48f-ed5af8aedeec">Giá trị sản phẩm</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="8955740d-3f4b-478a-97ce-e924cf04508b">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="e5d396d2-1ca0-4a54-a952-e2c3c5518d89">Tỷ lệ bảo hiểm (%):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="7b588a11-e10e-496c-aa05-fc9f14394f16">15</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="90337428-6729-4ae7-913a-a5cdf4279be7">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="25248977-7310-498a-b9cc-832810f4d4d3">Hình thức thanh toán:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="ecb81b31-c3eb-4d48-b003-d523ccd67121">Trực tiếp</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="2b9c8ce7-38c3-4cd6-9e9d-d80837d503dd">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="23b424aa-89c6-41cb-b95b-5e594042d877">Số tiền bảo hiểm tạm tính (VND):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="61313884-1f19-4f8f-8bec-47fab9c46d53">15.000.000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="8ae85f19-088f-4943-9b07-32ee1dd21e60">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="eaedaaf2-23bc-4dc1-a2d4-dfc2cafed853">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="1d3e1529-3e0d-4ba2-ba86-e8b57cf091f1">Bảo hiểm tự nguyện</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={11} cateid={140} id="06b7ac13-4d3d-4c02-8320-b48e58d7918b">
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="2875739d-7b9f-473f-9d69-b87c62a5996f">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="4fbe7263-b64b-4b3e-937a-c89145996fff">Nhà cung cấp:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="a36fdce7-4542-4b25-95ab-a643099504f9">VIC</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="6e1befa7-d65e-439d-afd3-6567556d8639">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="c2c7a85d-d6d1-43f8-9542-7b6ce12eef60">Loại sản phẩm:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="891259de-7eb7-4de7-a181-813a8d81ccd6">Bảo hiểm điện tử</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="aaf72791-29d8-4f73-998e-d2efbc399811">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="2cb1a41b-c4c9-4421-9782-cb4c7c9c1b0e">Tên sản phẩm:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="c2a04996-b690-452c-833d-615ad376005e">Bảo hiểm điện tử</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="4f054056-ae61-4bc9-bd97-2db144272479">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="666b836d-1f25-406a-bfc6-4568f83dd34a">Phí bảo hiểm tạm tính (VND):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="3adc8d50-1676-4614-9e67-f15644627c24">15.000.000</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="0fd4e367-b546-4a00-b4a7-e6e74782fc1f">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="7b96cd85-f1dd-40f0-9071-54fe60e243d8">Bảo hiểm theo:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="29aecc63-43b6-4a7d-82b2-6a7e64faa6fc">Giá trị sản phẩm</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="a66801e1-532d-4f18-8078-c5f9bd0a73b8">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="bf4b19e1-86ef-4a9b-a9fe-46e551c3bee6">Tỷ lệ bảo hiểm (%):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="8294f894-473c-47a2-bf2e-38e36c62e6d5">15</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="971ae0d5-cf0c-413b-a981-1f3afd54dd4e">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="f2c4e41e-feb1-4ff5-88a6-3f5ac57100d4">Hình thức thanh toán:</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="9cb90b29-180f-4d92-9881-86645bfbb6e7">Trực tiếp</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={12} cateid={140} id="33bc465e-82af-417c-a827-d16d5e2d31d9">
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="2fe54366-76ce-449b-822a-2bd0937a3126">Số tiền bảo hiểm tạm tính (VND):</div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="b20fcfcb-a55b-493d-a75c-a406b1458e5b">15.000.000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="eb5fdd90-ff4f-4af9-8b79-a6c3595ba539">
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="1f533609-4fc7-4daf-a156-711f5dee49ce">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="0a261600-ee7c-47c9-8630-d948a2eb951a">Tổng số tiền vay mua bảo hiểm:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="a7aa0c66-b218-4576-a64e-546ba346fb2f">15.000.000 VND</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={8} cateid={140} id="dc4641b1-1e64-4949-9104-ca54cccde1b5">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="9730db53-7b5f-483b-8612-a837bfea9261">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="0393f79e-71fe-4732-9c4e-28bf37b5a266">Tổng khoản vay:</div>
                                </div>
                                <div className="w-text wbaseItem-value" level={9} cateid={139} id="99b44884-9031-4b49-aa77-64a18543bbb0">15.000.000 VND</div>
                            </div>
                            <div ref={contentRef6} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="e2a16504-4268-43fa-a8bf-83dfa486ff69">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="dc6cadb2-04d1-4fd2-98a1-5085ad3cc8cc">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="84e0b27e-4e4f-4ebf-9579-0f38c0d4bb09">Sản phẩm bán kèm</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="81ba4ae1-ede0-4663-88c2-3ca1479ba94a">
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="4dcde2bd-380e-4499-8eba-daf8082612c3">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="abe9f362-9af7-45db-89e5-0d24adf67a29">Loại thẻ:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="9afd4403-4dd8-4ca5-8447-1404f53e961f">Thẻ tín dụng</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="f4be7f1f-04b8-4e4c-b0ad-d2695ffcbc90">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="5ae61727-7cef-40cd-b4f8-63865ff44164">Tên in trên thẻ:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="3a36683e-8bc4-4d37-ad2b-0822d4fd9fbb">Nguyễn Văn A</div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef7} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="735f2ab0-afa4-40a6-ac79-91610abe3c66">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="b7170db4-5886-46dc-bedf-740254ff7a59">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="276e9d78-3b30-447d-8dcd-b27b71107fe7">Thông tin khách hàng bổ sung</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="c4afb1cc-b078-4ef4-88b5-f2016e1c493e">
                                    <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="38869586-21f8-4887-830f-673247e944f7">
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="122d0112-90a8-42a1-9d7e-65466a64193a">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="20a55416-36c9-4254-a8f9-da326e0d8eda">Tên thường gọi ở nhà:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="f3344573-47a4-4fe0-b112-d757c30dc936">Nguyễn Hoàng Duy&nbsp;</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="f0882cf2-1d79-41d6-8f2a-49ebbb035378">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="4f66917c-d433-4c6b-984b-fe672868f17d">Trình độ học vấn:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="21b2085f-2324-4fba-9b2b-55fa0b05cba5">Đại học</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="32a0cf7b-3370-488d-a5c1-28e92e8da9c5">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="36a4872c-8470-42d4-9f3d-a2e6bb037f6a">Số điện thoại di động:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="e9868560-dbc3-41c5-830f-25e808e61f82">0123456789</div>
                                        </div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="5ec9ac60-e355-4982-8bcb-f8301ae0a982">
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="beb26951-9eff-4136-8dcf-257890b3626a">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="663f2b56-9192-4078-bfb5-cc3af4037666">Địa chỉ thường trú:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="1680f9a0-b4be-4faa-b500-26858b719e5a">11 Thái Hà</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="ba4ee8af-1dd5-4d02-8e86-53897071ddcd">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="726b46e8-2f7a-4766-b086-c0fa746935a8">Tỉnh/Thành phố:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="91ee9edc-0c20-477c-9f4d-548e569395ee">Hà Nội</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="5523bbd3-c061-49d3-8c3c-817065f6262e">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="4e3f7261-f107-4754-9f53-0587ef4985be">Quận/Huyện:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="42a10312-135a-43b8-a330-3185fa0fc3e9">Đống Đa</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="eb0fd321-8c30-4596-8e8d-cdf1d14ab4cb">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="e96731f0-9e28-444c-8768-cad45f86ed6a">Phường/Xã:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="3d0c5805-3b41-4011-8e37-1919c791bcd9">Trung Liệt</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="162779a1-47c8-4a91-bbbb-f0b39e632870">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="b3dad5c1-c6f7-4d09-bd03-8180c88b1fe5">Nơi ở hiện tại:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="220acc02-2a01-4668-9296-67cf5877bf27">11 Thái Hà</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="7c747903-d5ce-47b1-81f0-ebe8284ae220">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="ffdb914a-6661-48e8-a475-cf556002c910">Tỉnh/Thành phố:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="c45be770-c402-4d0c-94dd-d6852e59d3ef">Hà Nội&nbsp; &nbsp; &nbsp;</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="fa901433-11fa-4584-b7ff-2a2385ec2e8c">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="a15ae515-c01f-4501-a479-c95c19a61ab2">Quận/Huyện:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="f40f7a8d-e7e1-41ce-b600-c4d1c102184b">Đống Đa</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="7e19a1f5-891f-4cbc-a0d2-362c4b7c6db3">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="7c797fc1-5bc3-4b2c-bb14-ef4a0d4474e4">Phường/Xã:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="a18f384f-56c6-49ef-9e6a-95a253ad1988">Trung Liệt</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="833dbf6e-3e1b-4992-a61f-115e752942d8">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="2f27df45-b1b0-42d3-8f50-5bd88011a54c">Thời gian cư trú:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="2b09f3b2-5044-4e06-ad96-5332affbbd4c">1 năm 6 tháng</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="1732ee7f-4397-4ac7-8f2c-be6daba89a2e">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="71aefd15-038e-44d9-bf74-ae7011ddcf88">Tình trạng cư trú:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="9a763fdd-ecdd-403f-9db5-6e74a75a112a">Đang ở</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef8} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="43b52985-a1ed-41e7-becd-a4ef165c627d">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="d56aca87-2484-4301-a805-2ab04babe66d">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="5e405ad4-9981-4ea3-a55b-7a81d669a2f1">Công việc khách hàng</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="6a7bc278-d15e-4bcc-a39c-9bf2276f40bf">
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="80e75849-4a9e-42a1-80aa-cddd3c2c1d77">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="ee7d6706-6116-4280-b982-e2c792ed0154">Nghề nghiệp:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="774a4358-54e6-4611-8deb-dabae6c0fab2">Nghề nghiệp</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="26b46f5b-48c6-4326-b827-1bb2dcc51c94">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="7a209700-f8fc-4986-8260-f7d6ab03fbb2">Tên công ty/Nơi làm việc:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="cfb1ffe9-209e-4c68-8a54-a08f0d5ccbad">Tên công ty</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="5006480d-2562-4133-a9ec-1f3f2eec4099">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="2ec5f5c5-a48d-490d-ae18-a643d822a24f">Địa chỉ nơi làm việc:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="f060b019-402b-49d4-b74c-f5976fb6373f">Hà Nội</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="2f590be9-5401-45d5-a3a6-690498c941f2">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="f1bc628f-93a3-48ec-9b28-3b8ec495faa8">Chức vụ:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="9e13df63-98f8-436c-9c4a-ebefd28ea835">Chức vụ</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col12-lg col12-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="ed58d728-95a3-4507-a65c-acfc3ce339e0">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="4ed098d5-5179-43e6-8baf-defaf64e7e3c">Số điện thoại công ty:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="8600da71-5bc3-4cce-8b2c-4f1a6acbcd90">0123456789</div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef9} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="2b422d9f-4d4b-4952-acbc-c28e63e795f0">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="8cbc2615-ab16-4a57-9a04-ce44fcfeaff2">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="28540063-7cf3-4006-8731-012de2c7416c">Tài chính khách hàng</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={9} cateid={140} id="3a341a82-f392-4107-9200-36f95336c54e">
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="ee20eb29-56bb-45bd-944f-054c3d25aa42">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="e495adc2-e3f5-44ac-b544-d4e9ccb14eb6">Thu nhập hàng tháng:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="de753abb-ccab-4089-b882-8de337e56430">15.000.000&nbsp;VND</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="14a35756-3a13-405b-ae4c-02d1bedc1930">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="016dcb81-c305-4baa-91e8-f6dfbac1dd89">Nguồn thu nhập khác:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="03280cee-e08f-4d3c-bea5-77c4417a367b">Nguồn 1</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="151c36f1-104a-4692-b7e7-5dd8414ddbfd">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="611444e5-88c7-417e-a106-b0aa96ca352e">Thu nhập khác:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="369284d3-840f-4360-be9b-f4e7b6f03291">500.000 VND</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="5bc730da-e922-437a-a5ef-603e33450b50">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="70523d91-e3d3-4420-9774-49ece7e90f07">Chi phí sinh hoạt hàng tháng:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="66db1ec7-acaa-4e75-855d-b5505753a35b">15.500.000 VND</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="cf4c6b00-6c0a-486c-bba3-0b88b6c7554a">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="b8c43a3a-6c95-452f-bd44-1e9225ef8bb4">Tổng thanh toán nợ vay hàng tháng:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="a05eac8d-b1e0-4d9f-a85b-01a0b7736aac">15.500.000 VND</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="c342e3ac-97ed-424a-b8b3-764491d947e1">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="9f6bafe0-68bb-435a-98ba-13e5d8385a46">Số người phụ thuộc:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="45d302eb-ff30-48fe-a9c6-48c12ff06aa0">2</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="7bf55716-df56-4093-b654-f0424cfca714">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="801d385a-22a9-44f6-8409-ce1636783a4e">Điểm DTI:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="97628963-a60e-4730-a76b-e543fa135119">80</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={10} cateid={140} id="5748e098-b407-417d-8889-c34784f23bc0">
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="4dd742de-a803-4267-9a9f-6dd9227e6a2e">Kết quả DTI:</div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="acd5b9a6-bebf-46ab-97b2-a67f09ab76bc">80</div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef10} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="894a5ebd-dc8a-429b-be9c-b554b9e2284c">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="bf552c11-b290-46b2-81b4-87c31b9881e2">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="e06ab9d9-05dd-42e9-9272-15696748d414">Thông tin người liên quan</div>
                                </div>
                                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="90f263af-b16e-4a4c-9a7f-3e411bf57724">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="df963d1a-f411-41c1-95fd-54346693a731">Người liên hệ trong trường hợp cần thực hiện nghĩa vụ theo hợp đồng</div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="3be70ba5-b247-409d-b155-0a88db4dba03">
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="b80ae794-edbd-46e6-97d3-312a2d84d92d">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="45407a97-c0a1-48e6-88a6-e77b8c432624">Họ tên:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="57b39dbe-104d-4e57-b9f8-7bc18373173f">Nguyễn Văn A</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="0c0f818a-2fa1-4102-93ab-7efd9d90f370">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="fbed90ef-7d79-40fb-a16b-cc0c1fe905b3">Mối quan hệ:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="f5f1f53f-4926-4cf1-9ef3-a6722a458afb">Anh trai</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="f8882edf-3c53-476d-b593-6710d2f720de">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="984ab478-b256-4d71-8deb-6d146afbd982">Số điện thoại:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="abc24798-7181-4324-b6ee-f121cbe5482a">1234567890</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="6a1ed130-139a-4259-904b-98b6a7cf2bf0">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="705050d1-1f59-4480-9f0f-9904c2ebf4eb">Người liên hệ trong trường hợp khẩn cấp</div>
                                    <div className="w-frame wbaseItem-value w-row" wrap="wrap" level={10} cateid={140} id="29aee5ae-835d-4966-bd96-d5ec8794ff7a">
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="5ea039f6-871d-435a-af71-c4b8bb9bc355">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="27fb5c3c-7193-479c-af5b-12a4acc0f26a">Họ tên:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="cf59c7f8-71cd-402a-b0f1-0ed299c19f42">Nguyễn Văn A</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="362e8ba2-a600-42a1-851c-266fbc6e91fa">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="5706b988-b52d-41a8-9965-663cc786ab51">Mối quan hệ:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="959fc324-03e3-4b27-858a-265974614ff7">Anh trai</div>
                                        </div>
                                        <div className="w-frame wbaseItem-value w-col col- col6-xxl col6-xl col8-lg col8-md col12-sm col12" wrap="nowrap" level={11} cateid={140} id="c920e350-a4f9-461a-ab52-42b3dcd95a3f">
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="6ff5d2e2-e58f-4058-aa21-7dfc271c89b3">Số điện thoại:</div>
                                            <div className="w-text wbaseItem-value" level={12} cateid={139} id="c90a76fc-abb8-448a-b746-08b0283017bb">1234567890</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ref={contentRef11} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="14d3e4da-e524-43af-a720-069b4a7a5d1e">
                                <div className="w-text wbaseItem-value" level={9} cateid={139} id="7a8163c8-7dc0-40c9-96c7-da611b8ce929">Hồ sơ đính kèm</div>
                                <table className="w-table wbaseItem-value" type={0} name-field="Table" level={9} cateid={117} id="b12abb98-1388-4a80-8043-2515b86c1a4d">
                                    <tbody><tr className="table-row">
                                        <td id="1x1" className="table-cell" rowSpan={1} colSpan={1}>
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="1c88b6ab-a653-421d-919b-0cc212096acd">
                                                <div className="w-text wbaseItem-value" level={11} cateid={139} id="fa128853-6c64-4f34-a2fe-e818558b068e">Loại hồ sơ</div>
                                            </div>
                                        </td>
                                        <td id="1x2" className="table-cell" rowSpan={1} colSpan={1}>
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="536b0526-b4f5-45b8-96f2-d33645fc3584">
                                                <div className="w-text wbaseItem-value" level={11} cateid={139} id="be5d319d-528e-4bb3-acf0-1fe020de937d">Tệp đính kèm</div>
                                            </div>
                                        </td>
                                        <td id="1x3" className="table-cell" rowSpan={1} colSpan={1}>
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="9642672c-d507-40df-821d-591d3ce65fa5" />
                                        </td>
                                        <td id="1x4" className="table-cell" rowSpan={1} colSpan={1}>
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="53629fd4-7f47-4194-a2b8-a206f6de8169">
                                                <div className="w-text wbaseItem-value" level={11} cateid={139} id="c0d4579f-ee82-4086-ae62-7f7ee4001b09">Người upload</div>
                                            </div>
                                        </td>
                                        <td id="1x5" className="table-cell" rowSpan={1} colSpan={1}>
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="6a191d05-dd3a-4d62-8057-2e83ef5dc816">
                                                <div className="w-text wbaseItem-value" level={11} cateid={139} id="52f90f12-510e-405f-9ce3-2d0a8ee6526d">Thời gian upload</div>
                                            </div>
                                        </td>
                                    </tr>
                                        <tr className="table-row">
                                            <td id="2x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="ecefd6fb-42aa-4ef6-b185-fa64c15e22fd">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="107bfb62-9e31-4bff-842c-4a5a0e879841">Hồ sơ 1</div>
                                                </div>
                                            </td>
                                            <td id="2x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="7a74f3db-157f-4d8b-a66d-fd0791767d66">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="73e18ead-306d-490e-bc35-692f760641b4">ho_so_1.pdf</div>
                                                </div>
                                            </td>
                                            <td id="2x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="82058569-cc9e-42ed-90dc-a64a10b30868">
                                                    <div className="w-svg wbaseItem-value" level={11} cateid={115} id="faf7ed5a-2337-4954-b7fe-b6be4c014533"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                </div>
                                            </td>
                                            <td id="2x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="a12e8ef1-9c91-4431-8fa0-78035b5b1040">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="0e2bd592-8db4-4856-9bc3-e6ed32efcb00">JIVF001234 - Trần Bình An</div>
                                                </div>
                                            </td>
                                            <td id="2x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="0a6035a4-807e-4e44-ad4c-994288fbd4da">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="1daacf77-1241-42bd-961c-f8a746a36ad6">07/05/2016 15:06</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="table-row">
                                            <td id="3x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d39aca5b-2106-4a51-af72-ad4fb51e3719">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="076c93a8-0385-4773-97c3-2ecff8c1afa9">Hồ sơ 1</div>
                                                </div>
                                            </td>
                                            <td id="3x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="6cb679c6-1a3e-466d-86c1-3344b64b39a7">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="812ab125-d8ac-4cef-9481-1b358b70dc4e">ho_so_1.pdf</div>
                                                </div>
                                            </td>
                                            <td id="3x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="40f74e37-d48e-4465-b8a8-4098a9edf012">
                                                    <div className="w-svg wbaseItem-value" level={11} cateid={115} id="a88ef4eb-6a4e-499e-ab17-38d40096acb8"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                </div>
                                            </td>
                                            <td id="3x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="de283c24-843f-4538-bd77-1020140338fd">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="6315c207-b565-452c-8ca1-fa5930fd9fd4">JIVF001234 - Trần Bình An</div>
                                                </div>
                                            </td>
                                            <td id="3x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="a97b0269-142d-4b2d-8e7c-0ccbfcf31ced">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="12fb5e61-bb0f-42ad-9054-b2bebaffe5c6">07/05/2016 15:06</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="table-row">
                                            <td id="4x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="2a3c253e-b69c-4c42-828a-a9fbf3b9638f">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="f3ec3195-ed02-4d75-8125-b0a074c24d86">Hồ sơ 1</div>
                                                </div>
                                            </td>
                                            <td id="4x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="f7e75422-dac7-4240-8f78-3d1993468eba">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="694961d3-df94-475e-98c2-ad139c7a6301">ho_so_1.pdf</div>
                                                </div>
                                            </td>
                                            <td id="4x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="a3cfb462-a1c5-4419-9a07-32abb961a593">
                                                    <div className="w-svg wbaseItem-value" level={11} cateid={115} id="cc3f56de-5c2a-4b09-a1ca-4d63795cd115"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                </div>
                                            </td>
                                            <td id="4x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="daf6e8f2-e386-45cb-87ab-660099369cfe">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="3637844c-1b8e-4ee5-8f5c-bea65f88437c">JIVF001234 - Trần Bình An</div>
                                                </div>
                                            </td>
                                            <td id="4x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="92d0b55b-8fdf-443d-93db-aa4dbf85957e">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="927172a0-103f-4766-866e-34da8acbe3b4">07/05/2016 15:06</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="table-row">
                                            <td id="5x1" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="d0d3141f-061c-4a17-8882-31751f732413">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="fdd3088d-84f2-4acb-8785-94eb9348aaef">Hồ sơ 1</div>
                                                </div>
                                            </td>
                                            <td id="5x2" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="45513d7e-8546-453a-b52f-844d30ff0ab1">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="d97271c2-f68a-4775-bbcc-7e0564ab0e2b">ho_so_1.pdf</div>
                                                </div>
                                            </td>
                                            <td id="5x3" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="70f69286-fd46-44d2-9e0d-f229ab1691d4">
                                                    <div className="w-svg wbaseItem-value" level={11} cateid={115} id="43356327-5d22-41c0-9c50-fba5431fe329"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 10.5L12 16.3333L17 10.5H12.8333V3H11.1667V10.5H7Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                        <path d="M20.3333 19.6667H3.66667V14.6667H2V20.5C2 20.96 2.37333 21.3333 2.83333 21.3333H21.1667C21.6267 21.3333 22 20.96 22 20.5V14.6667H20.3333V19.6667Z" fill="#009944FF" fillOpacity="0.6" style={{ mixBlendMode: 'multiply' }} />
                                                    </svg>
                                                    </div>
                                                </div>
                                            </td>
                                            <td id="5x4" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="13ddf370-759d-4113-9d62-2add9648ec15">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="a31362a1-45a6-4000-9ef2-828281b02b4c">JIVF001234 - Trần Bình An</div>
                                                </div>
                                            </td>
                                            <td id="5x5" className="table-cell" rowSpan={1} colSpan={1}>
                                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={10} cateid={140} id="7298c994-8c83-4fbb-87a2-4aeba6b23900">
                                                    <div className="w-text wbaseItem-value" level={11} cateid={139} id="79fcf92d-3539-4cb2-ac75-644f202300da">07/05/2016 15:06</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div ref={contentRef12} className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="97ba5cbb-501b-4b30-8091-f50bdc7716eb">
                                <div className="w-text wbaseItem-value" level={9} cateid={139} id="dd073698-4227-46fa-918b-e67185e55119">Ghi chú</div>
                                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={9} cateid={140} id="35093bce-174d-4746-8b64-871a274b7dff">
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="7f09303e-7076-4895-b681-ce939b29c720">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="32bb7a72-8d77-4986-9890-c0d8d3ab5fdd">
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="30e0139d-c3ac-4ef8-b10d-a9734b109b93">
                                                <div className="w-svg wbaseItem-value" level={13} cateid={115} id="9cabe734-5274-4ae3-b66e-243dbacd674d"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.9997 7C16.9997 9.76142 14.7611 12 11.9997 12C9.23826 12 6.99968 9.76142 6.99968 7C6.99968 4.23858 9.23826 2 11.9997 2C14.7611 2 16.9997 4.23858 16.9997 7Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M3.66667 19.222C3.66667 17.177 6.375 13.667 12 13.667C17.625 13.667 20.3333 17.177 20.3333 19.222V20.3337C20.3333 20.7757 20.1577 21.1996 19.8452 21.5122C19.5326 21.8247 19.1087 22.0003 18.6667 22.0003H5.33334C4.89131 22.0003 4.46739 21.8247 4.15483 21.5122C3.84227 21.1996 3.66667 20.7757 3.66667 20.3337V19.222Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                </svg>
                                                </div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="e11234d2-2ca8-42ab-9b88-7df30b77a754">nguoiupload@gmail.com</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="f4575592-12c1-499a-8c39-833e17eb70c4">
                                                <div className="w-svg wbaseItem-value" level={13} cateid={115} id="015e058c-f9fb-42e2-b98a-e0deef4b81ce"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.16667 11.1667C5.70643 11.1667 5.33333 11.5398 5.33333 12V12.8333C5.33333 13.2936 5.70643 13.6667 6.16667 13.6667H7.83333C8.29357 13.6667 8.66667 13.2936 8.66667 12.8333V12C8.66667 11.5398 8.29357 11.1667 7.83333 11.1667H6.16667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M11.1667 11.1667C10.7064 11.1667 10.3333 11.5398 10.3333 12V12.8333C10.3333 13.2936 10.7064 13.6667 11.1667 13.6667H12.8333C13.2936 13.6667 13.6667 13.2936 13.6667 12.8333V12C13.6667 11.5398 13.2936 11.1667 12.8333 11.1667H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M5.33333 16.1667C5.33333 15.7064 5.70643 15.3333 6.16667 15.3333H7.83333C8.29357 15.3333 8.66667 15.7064 8.66667 16.1667V17C8.66667 17.4602 8.29357 17.8333 7.83333 17.8333H6.16667C5.70643 17.8333 5.33333 17.4602 5.33333 17V16.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M11.1667 15.3333C10.7064 15.3333 10.3333 15.7064 10.3333 16.1667V17C10.3333 17.4602 10.7064 17.8333 11.1667 17.8333H12.8333C13.2936 17.8333 13.6667 17.4602 13.6667 17V16.1667C13.6667 15.7064 13.2936 15.3333 12.8333 15.3333H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M15.3333 12C15.3333 11.5398 15.7064 11.1667 16.1667 11.1667H17.8333C18.2936 11.1667 18.6667 11.5398 18.6667 12V12.8333C18.6667 13.2936 18.2936 13.6667 17.8333 13.6667H16.1667C15.7064 13.6667 15.3333 13.2936 15.3333 12.8333V12Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.83333 2.83333C7.83333 2.3731 7.46024 2 7 2C6.53976 2 6.16667 2.3731 6.16667 2.83333V3.66667H4.5C3.11929 3.66667 2 4.78595 2 6.16667V18.6667C2 20.0474 3.11929 21.1667 4.5 21.1667H19.5C20.8807 21.1667 22 20.0474 22 18.6667V6.16667C22 4.78595 20.8807 3.66667 19.5 3.66667H17.8333V2.83333C17.8333 2.3731 17.4602 2 17 2C16.5398 2 16.1667 2.3731 16.1667 2.83333V3.66667H7.83333V2.83333ZM4.5 5.33333C4.03976 5.33333 3.66667 5.70643 3.66667 6.16667V7.83333H20.3333V6.16667C20.3333 5.70643 19.9602 5.33333 19.5 5.33333H17.8333C17.8333 5.79357 17.4602 6.16667 17 6.16667C16.5398 6.16667 16.1667 5.79357 16.1667 5.33333H7.83333C7.83333 5.79357 7.46024 6.16667 7 6.16667C6.53976 6.16667 6.16667 5.79357 6.16667 5.33333H4.5ZM4.5 19.5C4.03976 19.5 3.66667 19.1269 3.66667 18.6667V9.5H20.3333V18.6667C20.3333 19.1269 19.9602 19.5 19.5 19.5H4.5Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                </svg>
                                                </div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="5f9c6192-d2d3-4de4-9b74-f3b290d082ba">01/06/2023</div>
                                            </div>
                                        </div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="2f910a75-7cf2-49e0-aad8-51a1cc7074d5">Bổ sung đầy đủ thông tin cá nhân, thông tin người thân. Hồ sơ đính kèm.</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="dc9d426a-9b7a-4e9c-b567-54d24d7ab24e">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="bbbe869b-9167-458d-8825-7ec571a3d33b">
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="c8d45f52-b25d-4d14-8371-804004bfd5a4">
                                                <div className="w-svg wbaseItem-value" level={13} cateid={115} id="e99e343d-ed16-4730-8f56-48d7501b6855"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.9997 7C16.9997 9.76142 14.7611 12 11.9997 12C9.23826 12 6.99968 9.76142 6.99968 7C6.99968 4.23858 9.23826 2 11.9997 2C14.7611 2 16.9997 4.23858 16.9997 7Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M3.66667 19.222C3.66667 17.177 6.375 13.667 12 13.667C17.625 13.667 20.3333 17.177 20.3333 19.222V20.3337C20.3333 20.7757 20.1577 21.1996 19.8452 21.5122C19.5326 21.8247 19.1087 22.0003 18.6667 22.0003H5.33334C4.89131 22.0003 4.46739 21.8247 4.15483 21.5122C3.84227 21.1996 3.66667 20.7757 3.66667 20.3337V19.222Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                </svg>
                                                </div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="c6636c9e-6c63-48d0-bf07-e6834abfeb99">nguoiupload@gmail.com</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="d52aba94-c9ba-4a21-916d-f9f5d5e3fac7">
                                                <div className="w-svg wbaseItem-value" level={13} cateid={115} id="0a3613ac-65cb-4854-92af-005b79895782"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.16667 11.1667C5.70643 11.1667 5.33333 11.5398 5.33333 12V12.8333C5.33333 13.2936 5.70643 13.6667 6.16667 13.6667H7.83333C8.29357 13.6667 8.66667 13.2936 8.66667 12.8333V12C8.66667 11.5398 8.29357 11.1667 7.83333 11.1667H6.16667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M11.1667 11.1667C10.7064 11.1667 10.3333 11.5398 10.3333 12V12.8333C10.3333 13.2936 10.7064 13.6667 11.1667 13.6667H12.8333C13.2936 13.6667 13.6667 13.2936 13.6667 12.8333V12C13.6667 11.5398 13.2936 11.1667 12.8333 11.1667H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M5.33333 16.1667C5.33333 15.7064 5.70643 15.3333 6.16667 15.3333H7.83333C8.29357 15.3333 8.66667 15.7064 8.66667 16.1667V17C8.66667 17.4602 8.29357 17.8333 7.83333 17.8333H6.16667C5.70643 17.8333 5.33333 17.4602 5.33333 17V16.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M11.1667 15.3333C10.7064 15.3333 10.3333 15.7064 10.3333 16.1667V17C10.3333 17.4602 10.7064 17.8333 11.1667 17.8333H12.8333C13.2936 17.8333 13.6667 17.4602 13.6667 17V16.1667C13.6667 15.7064 13.2936 15.3333 12.8333 15.3333H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M15.3333 12C15.3333 11.5398 15.7064 11.1667 16.1667 11.1667H17.8333C18.2936 11.1667 18.6667 11.5398 18.6667 12V12.8333C18.6667 13.2936 18.2936 13.6667 17.8333 13.6667H16.1667C15.7064 13.6667 15.3333 13.2936 15.3333 12.8333V12Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.83333 2.83333C7.83333 2.3731 7.46024 2 7 2C6.53976 2 6.16667 2.3731 6.16667 2.83333V3.66667H4.5C3.11929 3.66667 2 4.78595 2 6.16667V18.6667C2 20.0474 3.11929 21.1667 4.5 21.1667H19.5C20.8807 21.1667 22 20.0474 22 18.6667V6.16667C22 4.78595 20.8807 3.66667 19.5 3.66667H17.8333V2.83333C17.8333 2.3731 17.4602 2 17 2C16.5398 2 16.1667 2.3731 16.1667 2.83333V3.66667H7.83333V2.83333ZM4.5 5.33333C4.03976 5.33333 3.66667 5.70643 3.66667 6.16667V7.83333H20.3333V6.16667C20.3333 5.70643 19.9602 5.33333 19.5 5.33333H17.8333C17.8333 5.79357 17.4602 6.16667 17 6.16667C16.5398 6.16667 16.1667 5.79357 16.1667 5.33333H7.83333C7.83333 5.79357 7.46024 6.16667 7 6.16667C6.53976 6.16667 6.16667 5.79357 6.16667 5.33333H4.5ZM4.5 19.5C4.03976 19.5 3.66667 19.1269 3.66667 18.6667V9.5H20.3333V18.6667C20.3333 19.1269 19.9602 19.5 19.5 19.5H4.5Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                </svg>
                                                </div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="ffa06611-fd50-43eb-8d99-8cb3f8888431">01/06/2023</div>
                                            </div>
                                        </div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="767889a9-fd65-48d7-ba3f-81e3c5fae725">Bổ sung đầy đủ thông tin cá nhân, thông tin người thân. Hồ sơ đính kèm.</div>
                                    </div>
                                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={10} cateid={140} id="0589e6d9-ea5b-4ce2-9920-092f1fe2e45b">
                                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={11} cateid={140} id="62c1b23b-dfdf-45bf-9ea9-5076e94377b6">
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="a264e1a7-b0f8-4bc2-8109-2da55074a752">
                                                <div className="w-svg wbaseItem-value" level={13} cateid={115} id="97ebfbb8-d674-40d3-98f6-3bbe55447159"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.9997 7C16.9997 9.76142 14.7611 12 11.9997 12C9.23826 12 6.99968 9.76142 6.99968 7C6.99968 4.23858 9.23826 2 11.9997 2C14.7611 2 16.9997 4.23858 16.9997 7Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M3.66667 19.222C3.66667 17.177 6.375 13.667 12 13.667C17.625 13.667 20.3333 17.177 20.3333 19.222V20.3337C20.3333 20.7757 20.1577 21.1996 19.8452 21.5122C19.5326 21.8247 19.1087 22.0003 18.6667 22.0003H5.33334C4.89131 22.0003 4.46739 21.8247 4.15483 21.5122C3.84227 21.1996 3.66667 20.7757 3.66667 20.3337V19.222Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                </svg>
                                                </div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="5ef038d5-923b-40b5-8e7a-663c3a9d4a9c">nguoiupload@gmail.com</div>
                                            </div>
                                            <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={12} cateid={140} id="b66602f2-a571-442e-b5ec-c2676191d2e0">
                                                <div className="w-svg wbaseItem-value" level={13} cateid={115} id="9adb1001-021c-45fc-a79b-cfffe9700138"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.16667 11.1667C5.70643 11.1667 5.33333 11.5398 5.33333 12V12.8333C5.33333 13.2936 5.70643 13.6667 6.16667 13.6667H7.83333C8.29357 13.6667 8.66667 13.2936 8.66667 12.8333V12C8.66667 11.5398 8.29357 11.1667 7.83333 11.1667H6.16667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M11.1667 11.1667C10.7064 11.1667 10.3333 11.5398 10.3333 12V12.8333C10.3333 13.2936 10.7064 13.6667 11.1667 13.6667H12.8333C13.2936 13.6667 13.6667 13.2936 13.6667 12.8333V12C13.6667 11.5398 13.2936 11.1667 12.8333 11.1667H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M5.33333 16.1667C5.33333 15.7064 5.70643 15.3333 6.16667 15.3333H7.83333C8.29357 15.3333 8.66667 15.7064 8.66667 16.1667V17C8.66667 17.4602 8.29357 17.8333 7.83333 17.8333H6.16667C5.70643 17.8333 5.33333 17.4602 5.33333 17V16.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M11.1667 15.3333C10.7064 15.3333 10.3333 15.7064 10.3333 16.1667V17C10.3333 17.4602 10.7064 17.8333 11.1667 17.8333H12.8333C13.2936 17.8333 13.6667 17.4602 13.6667 17V16.1667C13.6667 15.7064 13.2936 15.3333 12.8333 15.3333H11.1667Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path d="M15.3333 12C15.3333 11.5398 15.7064 11.1667 16.1667 11.1667H17.8333C18.2936 11.1667 18.6667 11.5398 18.6667 12V12.8333C18.6667 13.2936 18.2936 13.6667 17.8333 13.6667H16.1667C15.7064 13.6667 15.3333 13.2936 15.3333 12.8333V12Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.83333 2.83333C7.83333 2.3731 7.46024 2 7 2C6.53976 2 6.16667 2.3731 6.16667 2.83333V3.66667H4.5C3.11929 3.66667 2 4.78595 2 6.16667V18.6667C2 20.0474 3.11929 21.1667 4.5 21.1667H19.5C20.8807 21.1667 22 20.0474 22 18.6667V6.16667C22 4.78595 20.8807 3.66667 19.5 3.66667H17.8333V2.83333C17.8333 2.3731 17.4602 2 17 2C16.5398 2 16.1667 2.3731 16.1667 2.83333V3.66667H7.83333V2.83333ZM4.5 5.33333C4.03976 5.33333 3.66667 5.70643 3.66667 6.16667V7.83333H20.3333V6.16667C20.3333 5.70643 19.9602 5.33333 19.5 5.33333H17.8333C17.8333 5.79357 17.4602 6.16667 17 6.16667C16.5398 6.16667 16.1667 5.79357 16.1667 5.33333H7.83333C7.83333 5.79357 7.46024 6.16667 7 6.16667C6.53976 6.16667 6.16667 5.79357 6.16667 5.33333H4.5ZM4.5 19.5C4.03976 19.5 3.66667 19.1269 3.66667 18.6667V9.5H20.3333V18.6667C20.3333 19.1269 19.9602 19.5 19.5 19.5H4.5Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                                                </svg>
                                                </div>
                                                <div className="w-text wbaseItem-value" level={13} cateid={139} id="31def246-c4e7-4804-8503-d7d02558f6f1">01/06/2023</div>
                                            </div>
                                        </div>
                                        <div className="w-text wbaseItem-value" level={11} cateid={139} id="a4337edd-1d26-41f4-89f1-2daf9836871d">Bổ sung đầy đủ thông tin cá nhân, thông tin người thân. Hồ sơ đính kèm.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={8} cateid={140} id="981d54a8-2f29-4cb4-8c4c-95ba84ad8d46">
                                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={9} cateid={140} id="5ec956d0-b9ff-454b-a8a3-c145f6ccefde">
                                    <div className="w-text wbaseItem-value" level={10} cateid={139} id="b1f619a6-5415-4fd9-953a-65961a8a7218">Yêu cầu bổ sung/chỉnh sửa của thẩm định</div>
                                </div>
                                <div className="w-text wbaseItem-value" level={9} cateid={139} id="d42246ce-e497-4869-98f6-95e1f3665f02">Bổ sung đầy đủ thông tin cá nhân, thông tin người thân. Bổ sung hồ sơ đính kèm.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}