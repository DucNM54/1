import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { Router } from "../router/router";

import $ from "jquery";

export default function Menu() {
    const location = useLocation();

    const [showMyWork, setShowMyWork] = useState(true);
    const [showAdviceCustomers, setShowAdviceCustomers] = useState(true);
    const [showAdminContentMobileApp, setshowAdminContentMobileApp] = useState(true);

    useEffect(() => {
        const currentPath = location.pathname;
        $('.sidebar>a').css("background-color", "rgb(22, 26, 23)");
        const list = $('.sidebar>a');
        const selectted = [...list].find((e) => currentPath.includes(e.attributes.href.value));
        $(selectted).css({
            "background-color": "rgb(0, 153, 68)",
            "color": "rgb(255, 255, 255)",
        });

        // });
    }, [location.pathname, showMyWork, showAdviceCustomers, showAdminContentMobileApp]);

    return <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={2} cateid={140} id="9a3c6a3f-52b4-477b-8ff4-79ee2eb223c9">
        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={3} cateid={140} id="0dbd24b9-f502-44f8-b1d0-d12abfadaf3d">
            <div className="w-svg wbaseItem-value" level={4} cateid={115} id="a14d9eba-d5e1-4103-a19a-107bcf613eaa"><svg width={114} height={32} viewBox="0 0 114 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_8_19697)">
                    <path d="M46.8466 16.1337C46.8466 7.69857 53.6825 0.870117 62.127 0.870117H70.7725L67.9577 8.0333H62.194C57.7037 8.0333 54.0847 11.6484 54.0847 16.1337C54.0847 20.6191 57.7037 24.2341 62.194 24.2341H68.8289V31.4643H62.194C53.6825 31.3973 46.8466 24.5689 46.8466 16.1337Z" fill="white" />
                    <path d="M40.0777 24.2343L34.8501 11.113L26.9419 31.3975H19.1676L30.4939 3.01255C31.2311 1.27197 32.9066 0 34.8501 0C36.7937 0 38.4022 1.27197 39.1394 3.01255L47.8519 24.7699C49.1923 28.0502 46.5785 31.3975 43.6297 31.3975H30.3598L33.1747 24.1674H40.0777V24.2343Z" fill="white" />
                    <path d="M62.1279 20.7531C64.6818 20.7531 66.7522 18.685 66.7522 16.1339C66.7522 13.5828 64.6818 11.5146 62.1279 11.5146C59.5739 11.5146 57.5035 13.5828 57.5035 16.1339C57.5035 18.685 59.5739 20.7531 62.1279 20.7531Z" fill="white" />
                    <path d="M67.9576 16.1337C67.9576 7.69857 74.7936 0.870117 83.2381 0.870117H91.8836L89.0687 8.0333H83.3051C78.8148 8.0333 75.1957 11.6484 75.1957 16.1337C75.1957 20.6191 78.8148 24.2341 83.3051 24.2341H89.94V31.4643H83.3051C74.7936 31.3973 67.9576 24.5689 67.9576 16.1337Z" fill="white" />
                    <path d="M78.6145 16.1339C78.6145 13.59 80.6921 11.5146 83.2388 11.5146C85.7856 11.5146 87.8632 13.59 87.8632 16.1339C87.8632 18.6778 85.7856 20.7531 83.2388 20.7531C80.6921 20.7531 78.6145 18.6778 78.6145 16.1339Z" fill="white" />
                    <path d="M0 21.2887V20.3515H7.17108V21.2887C7.17108 23.2301 8.71252 24.7699 10.6561 24.7699C12.5996 24.7699 14.1411 23.2301 14.1411 21.2887C14.1411 20.1506 14.1411 0 14.1411 0H21.3122C21.3122 0 21.3122 20.3515 21.3122 21.2887C21.3122 27.1799 16.5538 32 10.5891 32C4.75838 32 0 27.1799 0 21.2887Z" fill="white" />
                    <path d="M91.6151 31.3978V24.2346H104.55C105.823 24.2346 106.829 23.2304 106.829 21.9584C106.829 20.6865 105.823 19.6823 104.55 19.6823H100.194C94.9661 19.6823 90.8109 15.4647 90.8109 10.3099C90.8109 5.08813 95.0331 0.9375 100.194 0.9375H112.793L109.844 8.03373H100.127C98.9203 8.03373 97.915 9.03792 97.915 10.2429C97.915 11.448 98.9203 12.4521 100.127 12.4521H104.483C109.71 12.4521 114 16.6697 114 21.9584C114 27.1802 109.777 31.4647 104.483 31.4647H91.6151V31.3978Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_8_19697">
                        <rect width={114} height={32} fill="white" />
                    </clipPath>
                </defs>
            </svg>
            </div>
        </div>
        <div className="w-frame wbaseItem-value w-col sidebar" wrap="nowrap" level={3} cateid={140} id="eb315fff-002e-4154-8775-6b078d80bc10">
            <NavLink to="/admin/dashboard-sc" className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="1e53e77f-d029-4623-965a-2b4c1e0c23a8">
                <div className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="ab222b2d-aa2c-4ebe-a890-c11cc493ee59">
                    <div className="w-svg wbaseItem-value" level={6} cateid={115} id="991dca00-5c8a-46d7-85eb-e143ba7478c5"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.27273 2H2.90909C2.40701 2 2 2.40701 2 2.90909V9.27273C2 9.7748 2.40701 10.1818 2.90909 10.1818H9.27273C9.7748 10.1818 10.1818 9.7748 10.1818 9.27273V2.90909C10.1818 2.40701 9.7748 2 9.27273 2Z" fill="white" />
                        <path d="M21.0909 2H14.7273C14.2252 2 13.8182 2.40701 13.8182 2.90909V9.27273C13.8182 9.7748 14.2252 10.1818 14.7273 10.1818H21.0909C21.593 10.1818 22 9.7748 22 9.27273V2.90909C22 2.40701 21.593 2 21.0909 2Z" fill="white" />
                        <path d="M9.27273 13.8182H2.90909C2.40701 13.8182 2 14.2252 2 14.7273V21.0909C2 21.593 2.40701 22 2.90909 22H9.27273C9.7748 22 10.1818 21.593 10.1818 21.0909V14.7273C10.1818 14.2252 9.7748 13.8182 9.27273 13.8182Z" fill="white" />
                        <path d="M21.0909 13.8182H14.7273C14.2252 13.8182 13.8182 14.2252 13.8182 14.7273V21.0909C13.8182 21.593 14.2252 22 14.7273 22H21.0909C21.593 22 22 21.593 22 21.0909V14.7273C22 14.2252 21.593 13.8182 21.0909 13.8182Z" fill="white" />
                    </svg>
                    </div>
                    <div className="w-text wbaseItem-value" level={6} cateid={139} id="39bb1a94-38d9-48d5-923e-a5ec4bdc9154">Dashboard</div>
                </div>
            </NavLink>
            <NavLink to="/admin/danh-sach-ho-so-vay" className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="b033300a-6cb7-4971-89b8-3a2d7375f816">
                <div className="w-svg wbaseItem-value" level={5} cateid={115} id="fd87f69a-b2ac-499c-94f7-d81b6e346adb"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4167 6.33333L9.91667 3H2.83333C2.61232 3 2.40036 3.0878 2.24408 3.24408C2.0878 3.40036 2 3.61232 2 3.83333V18.8333C2 19.4964 2.26339 20.1323 2.73223 20.6011C3.20107 21.0699 3.83696 21.3333 4.5 21.3333H19.5C20.163 21.3333 20.7989 21.0699 21.2678 20.6011C21.7366 20.1323 22 19.4964 22 18.8333V7.16667C22 6.94565 21.9122 6.73369 21.7559 6.57741C21.5996 6.42113 21.3877 6.33333 21.1667 6.33333H12.4167Z" fill="white" />
                </svg>
                </div>
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="1a9dea7b-d94b-4018-8f13-b336ebb9da5d">
                    <div className="w-text wbaseItem-value" level={6} cateid={139} id="7b8a168b-00a8-4140-b6ff-c14aa30ca781">Danh sách hồ sơ vay</div>
                </div>
            </NavLink>
            <div onClick={() => setShowMyWork(!showMyWork)} className="event-click w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="a78a7e65-54ab-41f5-ac39-2db04f081983">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="3b5b2e83-0f09-41da-b9d6-efc9da9fe1fa">
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="692d15e0-b6b9-4d42-b377-d9d221ac61e7">
                        <div className="w-svg wbaseItem-value" level={7} cateid={115} id="5601876e-6341-4660-ac52-548c1ea119d6">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1665 2H6.49997C5.83694 2 5.20106 2.26339 4.73223 2.73223C4.26339 3.20106 4 3.83694 4 4.49997V21.5831C3.99996 21.6577 4.01993 21.7309 4.05783 21.7951C4.09572 21.8593 4.15015 21.9122 4.21545 21.9482C4.28074 21.9842 4.35449 22.002 4.42902 21.9998C4.50355 21.9976 4.57612 21.9754 4.63916 21.9356L12.3332 17.0765L20.0273 21.9356C20.0938 21.9779 20.171 22.0002 20.2498 21.9998C20.3603 21.9998 20.4663 21.9559 20.5445 21.8777C20.6226 21.7996 20.6665 21.6936 20.6665 21.5831V4.49997C20.6665 3.83694 20.4031 3.20106 19.9343 2.73223C19.4654 2.26339 18.8295 2 18.1665 2V2Z" fill="white" />
                            </svg>
                        </div>
                        <div className="w-text wbaseItem-value" level={7} cateid={139} id="1b49208a-4dca-449c-a3ac-79c8f749146c">Công việc của tôi</div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={7} cateid={29} id="41cdf1c8-fa91-48b2-a152-49e7c8f71ac5">
                            <div className="w-text wbaseItem-value" name-field="Text" level={8} cateid={139} id="5d4f3e29-6b77-4e75-994e-fb59ab376def">34</div>
                        </button>
                    </div>
                </div>
                <div className="w-svg wbaseItem-value" level={5} cateid={115} id="e904a90c-33b4-473b-bbdc-066fa410cfca">
                    {showMyWork ?
                        (
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3899 15.7544L12 10.0693L5.61015 15.7544C5.24205 16.0819 4.65327 16.0819 4.28517 15.7544C3.90494 15.4161 3.90494 14.8584 4.28517 14.5201L11.3375 8.24562C11.7056 7.91813 12.2944 7.91813 12.6625 8.24562L19.7148 14.5201C20.0951 14.8584 20.0951 15.4161 19.7148 15.7544C19.3467 16.0819 18.7579 16.0819 18.3899 15.7544Z" fill="white" />
                            </svg>
                        ) :
                        (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="white"></path></svg>
                        )
                    }
                </div>
            </div>
            {
                showMyWork &&
                <>
                    <NavLink to="/admin/ho-so-cho-tiep-nhan" parentid="a78a7e65-54ab-41f5-ac39-2db04f081983" className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="7d040728-7d7e-49d3-b743-6e60c7ed1906">
                        <div className="w-text wbaseItem-value" level={5} cateid={139} id="939e19c1-83d0-42fc-9afb-5efd39141593">Hồ sơ chờ tiếp nhận</div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={5} cateid={29} id="519b60ce-7fb2-4027-8dc9-82c60c97c9ba">
                            <div className="w-text wbaseItem-value" name-field="Text" level={6} cateid={139} id="c642e16f-ce38-471c-9a30-d533135e6bef">12</div>
                        </button>
                    </NavLink>
                    <NavLink to="/admin/ho-so-cho-xu-ly" parentid="a78a7e65-54ab-41f5-ac39-2db04f081983" className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="b0b4a203-122a-4ce3-9f81-205e99206e86">
                        <div className="w-text wbaseItem-value" level={5} cateid={139} id="b29e2273-636e-4c63-a237-bac4581a0b6b">Hồ sơ chờ xử lý</div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={5} cateid={29} id="ba3d7df2-2164-4902-ae03-9c2934b09c45">
                            <div className="w-text wbaseItem-value" name-field="Text" level={6} cateid={139} id="f6eadb78-3906-4e42-ad43-377b18e041d6">22</div>
                        </button>
                    </NavLink>
                </>
            }
            <div onClick={() => setShowAdviceCustomers(!showAdviceCustomers)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="2d3fcbf2-48a0-448d-8ad5-9d5fe76ba8f8">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="e9ba4d04-fba5-4430-b211-6b8a347161f5">
                    <div className="w-svg wbaseItem-value" level={6} cateid={115} id="b7f38dab-ebc8-4d5c-9014-a40163bf5ec4"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 10C17.66 10 18.99 8.66 18.99 7C18.99 5.34 17.66 4 16 4C14.34 4 13 5.34 13 7C13 8.66 14.34 10 16 10ZM8 10C9.66 10 10.99 8.66 10.99 7C10.99 5.34 9.66 4 8 4C6.34 4 5 5.34 5 7C5 8.66 6.34 10 8 10ZM8 12C5.67 12 1 13.17 1 15.5V18H15V15.5C15 13.17 10.33 12 8 12ZM16 12C15.71 12 15.38 12.02 15.03 12.05C16.19 12.89 17 14.02 17 15.5V18H23V15.5C23 13.17 18.33 12 16 12Z" fill="#ffffffff" />
                    </svg>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="7032850c-8497-4565-844c-86dbb372453b">
                        <div className="w-text wbaseItem-value" level={7} cateid={139} id="7ef2907b-d1ea-46b6-b0f4-a7aea2c54832">Khách hàng chờ tư vấn</div>
                    </div>
                </div>
                <div className="w-svg wbaseItem-value" level={5} cateid={115} id="4e82cc1b-7809-43a9-82c5-6a16118a8861">
                    {showAdviceCustomers ?
                        (
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3899 15.7544L12 10.0693L5.61015 15.7544C5.24205 16.0819 4.65327 16.0819 4.28517 15.7544C3.90494 15.4161 3.90494 14.8584 4.28517 14.5201L11.3375 8.24562C11.7056 7.91813 12.2944 7.91813 12.6625 8.24562L19.7148 14.5201C20.0951 14.8584 20.0951 15.4161 19.7148 15.7544C19.3467 16.0819 18.7579 16.0819 18.3899 15.7544Z" fill="white" />
                            </svg>
                        ) :
                        (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="white"></path></svg>
                        )
                    }
                </div>
            </div>
            {
                showAdviceCustomers &&
                <>
                    <NavLink to="/admin/danh-sach-cho-cua-bo-phan" className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="f13b5a05-2b6d-46b2-ada7-4b1bb69d417b">
                        <div className="w-text wbaseItem-value" level={5} cateid={139} id="191f9e62-0f4a-4add-bf6f-3184196bcd96">Danh sách chờ của bộ phận&nbsp;</div>
                    </NavLink><NavLink to="/admin/danh-sach-cho-cua-toi" className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="0f731b45-fa34-4358-aa8c-0c5a6879a623">
                        <div className="w-text wbaseItem-value" level={5} cateid={139} id="400863ed-6de3-46cc-88a0-3cd148edf015">Danh sách chờ của tôi</div><button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={5} cateid={29} id="b921f001-597f-41bd-a955-3a929fb3cf99">
                            <div className="w-text wbaseItem-value" name-field="Text" level={6} cateid={139} id="501ad9cf-0f09-487a-8557-ccda3ad9e251">12</div>
                        </button>
                    </NavLink>
                </>
            }
            <NavLink to="/admin/tra-cu-san-pham" className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="bf51f7d6-be5c-4d3a-a633-e5538a2e061d">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="7eabbb28-0834-494c-9caf-30c85a13e0db">
                    <div className="w-svg wbaseItem-value" level={6} cateid={115} id="4e7cea1f-c506-45cc-9164-425fb6c07eef"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 10C17.66 10 18.99 8.66 18.99 7C18.99 5.34 17.66 4 16 4C14.34 4 13 5.34 13 7C13 8.66 14.34 10 16 10ZM8 10C9.66 10 10.99 8.66 10.99 7C10.99 5.34 9.66 4 8 4C6.34 4 5 5.34 5 7C5 8.66 6.34 10 8 10ZM8 12C5.67 12 1 13.17 1 15.5V18H15V15.5C15 13.17 10.33 12 8 12ZM16 12C15.71 12 15.38 12.02 15.03 12.05C16.19 12.89 17 14.02 17 15.5V18H23V15.5C23 13.17 18.33 12 16 12Z" fill="#ffffffff" />
                    </svg>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="85a8d38c-8dc5-42e3-860f-0a184d9d0142">
                        <div className="w-text wbaseItem-value" level={7} cateid={139} id="f16e54b9-21b7-457c-b6bf-90360de975c2">Tra cứu sản phẩm</div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/admin/tra-cuu-chuong-trinh-vay" className="nav-link w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="234ee29b-f004-4653-a6a0-d416a2998c48">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="42a26e91-ef2a-4b5d-8f78-5a1fcffed191">
                    <div className="w-svg wbaseItem-value" level={6} cateid={115} id="f25cdc1a-76b1-448f-9d94-53fb3d192f7a"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 10C17.66 10 18.99 8.66 18.99 7C18.99 5.34 17.66 4 16 4C14.34 4 13 5.34 13 7C13 8.66 14.34 10 16 10ZM8 10C9.66 10 10.99 8.66 10.99 7C10.99 5.34 9.66 4 8 4C6.34 4 5 5.34 5 7C5 8.66 6.34 10 8 10ZM8 12C5.67 12 1 13.17 1 15.5V18H15V15.5C15 13.17 10.33 12 8 12ZM16 12C15.71 12 15.38 12.02 15.03 12.05C16.19 12.89 17 14.02 17 15.5V18H23V15.5C23 13.17 18.33 12 16 12Z" fill="#ffffffff" />
                    </svg>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={6} cateid={140} id="9633a991-a1c1-4110-b10f-63605c42eb2e">
                        <div className="w-text wbaseItem-value" level={7} cateid={139} id="0dd39252-6f18-4e93-a9a3-7ed9c86d4794">Tra cứu chương trình vay</div>
                    </div>
                </div>
            </NavLink>
            <div onClick={() => setshowAdminContentMobileApp(!showAdminContentMobileApp)} className="w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="0de7b439-065a-43a0-8d08-9bbf684dc0f1">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={5} cateid={140} id="d69cf802-3771-44f5-9546-98ffc5ca3df2">
                    <div className="w-svg wbaseItem-value" level={6} cateid={115} id="282ab4a4-10fd-4a28-ba14-8fe14402db78"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H4.83333C4.61232 2 4.40036 2.0878 4.24408 2.24408C4.0878 2.40036 4 2.61232 4 2.83333V21.1667C4 21.3877 4.0878 21.5996 4.24408 21.7559C4.40036 21.9122 4.61232 22 4.83333 22H19.8333C20.0543 22 20.2663 21.9122 20.4226 21.7559C20.5789 21.5996 20.6667 21.3877 20.6667 21.1667V8.66667H14.8333C14.6123 8.66667 14.4004 8.57887 14.2441 8.42259C14.0878 8.26631 14 8.05435 14 7.83333V2ZM6.91667 16.1667H17.75C17.8605 16.1667 17.9665 16.2106 18.0446 16.2887C18.1228 16.3668 18.1667 16.4728 18.1667 16.5833V17.4167C18.1667 17.5272 18.1228 17.6332 18.0446 17.7113C17.9665 17.7894 17.8605 17.8333 17.75 17.8333H6.91667C6.80616 17.8333 6.70018 17.7894 6.62204 17.7113C6.5439 17.6332 6.5 17.5272 6.5 17.4167V16.5833C6.5 16.4728 6.5439 16.3668 6.62204 16.2887C6.70018 16.2106 6.80616 16.1667 6.91667 16.1667ZM6.91667 12H17.75C17.8605 12 17.9665 12.0439 18.0446 12.122C18.1228 12.2002 18.1667 12.3062 18.1667 12.4167V13.25C18.1667 13.3605 18.1228 13.4665 18.0446 13.5446C17.9665 13.6228 17.8605 13.6667 17.75 13.6667H6.91667C6.80616 13.6667 6.70018 13.6228 6.62204 13.5446C6.5439 13.4665 6.5 13.3605 6.5 13.25V12.4167C6.5 12.3062 6.5439 12.2002 6.62204 12.122C6.70018 12.0439 6.80616 12 6.91667 12ZM11.0833 9.5H6.91667C6.80616 9.5 6.70018 9.4561 6.62204 9.37796C6.5439 9.29982 6.5 9.19384 6.5 9.08333V8.25C6.5 8.13949 6.5439 8.03351 6.62204 7.95537C6.70018 7.87723 6.80616 7.83333 6.91667 7.83333H11.0833C11.1938 7.83333 11.2998 7.87723 11.378 7.95537C11.4561 8.03351 11.5 8.13949 11.5 8.25V9.08333C11.5 9.19384 11.4561 9.29982 11.378 9.37796C11.2998 9.4561 11.1938 9.5 11.0833 9.5Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                        <path d="M20.1783 7H15.6667V2.48833L20.1783 7Z" fill="#FFFFFFFF" style={{ mixBlendMode: 'multiply' }} />
                    </svg>
                    </div>
                    <div className="w-text wbaseItem-value" level={6} cateid={139} id="648ae737-cc57-4292-9eb2-eb46927d0fa9">Quản trị nội dung Mobile App</div>
                </div>
                <div className="w-svg wbaseItem-value" level={5} cateid={115} id="982de2d6-0406-4e67-8cd8-4d2eac6ca7f7">
                    {showAdminContentMobileApp ?
                        (
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3899 15.7544L12 10.0693L5.61015 15.7544C5.24205 16.0819 4.65327 16.0819 4.28517 15.7544C3.90494 15.4161 3.90494 14.8584 4.28517 14.5201L11.3375 8.24562C11.7056 7.91813 12.2944 7.91813 12.6625 8.24562L19.7148 14.5201C20.0951 14.8584 20.0951 15.4161 19.7148 15.7544C19.3467 16.0819 18.7579 16.0819 18.3899 15.7544Z" fill="white" />
                            </svg>
                        ) :
                        (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="white"></path></svg>
                        )
                    }
                </div>
            </div>
        </div>
    </div >
}