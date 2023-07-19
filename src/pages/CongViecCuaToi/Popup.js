import '../../css/Popup.css';
import ReactDOM from 'react-dom';
import { putData, postData } from '../../core/BaseDA';

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJudnZhbmgxIiwiaWF0IjoxNjg5NjcwNDY0LCJleHAiOjE2ODk2ODg0NjR9.4VoZV2OZfHOAOusRiVY4afeU7yfX7CLhbYI4uTs6cnIjhFhWH9xUfKHOFmhiyO3Gn0-yD5A1WAy2wPCa5svOgw";

export function PopupError(code) {
    const rejectFile = (code) => {
        var response = putData(`http://10.14.107.5:8091/jlos/task/reject?loanApplicationCode=${code.code}`, {
            headers: {
                token: token,
                Authorization: `Bearer ${token}`,
            }
        });
        // if (response.code === 200) {
        // TODO: update UI
        // }
    }
    return ReactDOM.createPortal(
        <div className='popup-overlay'>
            <div className="w-frame wbaseItem-value w-col min-brp" wrap="nowrap" level={1} cateid={140} id="4abc428d-21b6-4320-a00b-5f29823c2a51">
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" name-field="Frame" level={2} cateid={140} id="4ba0e206-5729-4c6d-9a0f-259511cf1290">
                    <div className="w-svg wbaseItem-value" level={3} cateid={115} id="064c9e20-4980-44c7-ab0c-d7c3440b2be5">
                        <svg width={72} height={72} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={72} height={72} rx={36} fill="#FFF1F2" />
                            <path d="M36 17.25C32.2916 17.25 28.6665 18.3497 25.5831 20.4099C22.4996 22.4702 20.0964 25.3986 18.6773 28.8247C17.2581 32.2508 16.8868 36.0208 17.6103 39.6579C18.3338 43.2951 20.1195 46.636 22.7418 49.2582C25.364 51.8805 28.7049 53.6662 32.3421 54.3897C35.9792 55.1132 39.7492 54.7419 43.1753 53.3227C46.6014 51.9036 49.5298 49.5004 51.5901 46.4169C53.6503 43.3335 54.75 39.7084 54.75 36C54.7356 31.0316 52.7555 26.2709 49.2423 22.7577C45.7291 19.2445 40.9684 17.2644 36 17.25V17.25ZM43.7344 41.525L41.525 43.7344L36 38.2094L30.475 43.7344L28.2656 41.525L33.7906 36L28.2656 30.475L30.475 28.2656L36 33.7906L41.525 28.2656L43.7344 30.475L38.2094 36L43.7344 41.525Z" fill="#E60012" />
                        </svg>
                    </div>
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" name-field="Frame" level={3} cateid={140} id="ab0f4812-3b03-4546-83f5-c0fd95a00664">
                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" name-field="Frame" level={4} cateid={140} id="0cbe0414-53ed-47de-8c39-c11f85c265a8">
                            <div className="w-text wbaseItem-value" name-field="Text" level={5} cateid={139} id="7c8647c1-675e-4896-8f8b-508efdd9fdb9">Từ chối tiếp nhận hồ sơ<br /></div>
                        </div>
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="e6d530e2-d9cc-4b90-a03f-692ea6acb8f4">
                            <div className="w-text wbaseItem-value" name-field="Text" level={5} cateid={139} id="b0dee765-fce4-4d9e-add5-ce162177b5b4">Bạn chắc chắn muốn từ chối tiếp nhận hồ sơ?</div>
                        </div>
                    </div>
                </div>
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={2} cateid={140} id="e6fd9c10-f4e8-401a-a33e-dc948db4da4a">
                    <button type="button" className="w-button wbaseItem-value w-row close-popup" wrap="nowrap" name-field="Button" level={3} cateid={29} id="c2574f8c-3967-4d83-a805-aa995dc3f3c8">
                        <div className="w-text wbaseItem-value" name-field="Text" level={4} cateid={139} id="61883415-46d9-41b2-aed2-5387660c7fa4">Hủy<br /></div>
                    </button>
                    <button onClick={() => rejectFile(code)} type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={3} cateid={29} id="4e95b29f-ef32-4f86-a0a6-3e8857c69ff0">
                        <div className="w-text wbaseItem-value" name-field="Text" level={4} cateid={139} id="748d9690-13be-401a-b6fa-ede8a77f1d9b">Xác nhận</div>
                    </button>
                </div>
            </div>
        </div>, document.body
    );
}

export function PopupInfo(code) {
    const acceptFile = (code) => {
        var response = putData(`http://10.14.107.5:8091/jlos/task/claims?loanApplicationCode=${code}`, {
            headers: {
                token: token,
                Authorization: `Bearer ${token}`,
            }
        });
        // if (response.code === 200) {
        // TODO: update UI
        // }
    }
    return ReactDOM.createPortal(
        <div className='popup-overlay'>
            <div className="w-frame wbaseItem-value w-col min-brp" wrap="nowrap" level={1} cateid={140} id="d59fdfd9-d2ab-4667-905c-ddd5b9f31099">
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" name-field="Frame" level={2} cateid={140} id="67c7840c-ad4d-4618-a6ed-b101bf7a8509">
                    <div className="w-svg wbaseItem-value" level={3} cateid={115} id="1524bb54-1386-4794-9c45-829ccc6b515e">
                        <svg width={72} height={72} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={72} height={72} rx={36} fill="#EEF4FD" />
                            <path d="M36 17.25C32.2916 17.25 28.6665 18.3497 25.5831 20.4099C22.4996 22.4702 20.0964 25.3986 18.6773 28.8247C17.2581 32.2508 16.8868 36.0208 17.6103 39.6579C18.3338 43.2951 20.1195 46.636 22.7418 49.2582C25.364 51.8805 28.7049 53.6662 32.3421 54.3897C35.9792 55.1132 39.7492 54.7419 43.1753 53.3227C46.6014 51.9036 49.5298 49.5004 51.5901 46.4169C53.6503 43.3335 54.75 39.7084 54.75 36C54.7446 31.0288 52.7675 26.2628 49.2523 22.7477C45.7372 19.2325 40.9712 17.2554 36 17.25V17.25ZM37.6063 46.5062H34.3797V32.875H37.6063V46.5062ZM37.3391 28.5922C37.161 28.7553 36.952 28.8809 36.7243 28.9615C36.4966 29.042 36.2551 29.0758 36.0141 29.0609C35.7686 29.0773 35.5224 29.0442 35.29 28.9637C35.0576 28.8832 34.8437 28.7568 34.6609 28.5922C34.4995 28.4184 34.3748 28.2138 34.2943 27.9907C34.2137 27.7676 34.179 27.5306 34.1922 27.2937C34.1758 27.0514 34.209 26.8083 34.2896 26.5792C34.3701 26.35 34.4965 26.1397 34.6609 25.9609C34.8442 25.797 35.0581 25.6712 35.2904 25.5907C35.5227 25.5102 35.7687 25.4767 36.0141 25.4922C36.255 25.4782 36.4963 25.5124 36.7239 25.5929C36.9514 25.6734 37.1605 25.7985 37.3391 25.9609C37.5035 26.1397 37.6299 26.35 37.7105 26.5792C37.791 26.8083 37.8242 27.0514 37.8078 27.2937C37.821 27.5306 37.7863 27.7676 37.7057 27.9907C37.6252 28.2138 37.5005 28.4184 37.3391 28.5922V28.5922Z" fill="#367BE2" />
                        </svg>
                    </div>
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" name-field="Frame" level={3} cateid={140} id="e2bb993a-7a2a-4feb-a8bf-886e14cbe7f3">
                        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" name-field="Frame" level={4} cateid={140} id="a8661836-f688-40a0-b48c-8e0cdd78e34c">
                            <div className="w-text wbaseItem-value" name-field="Text" level={5} cateid={139} id="0dd902c4-c0d7-4690-82c9-0360a5d0d835">Tiếp nhận hồ sơ<br /></div>
                        </div>
                        <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={4} cateid={140} id="f46014d5-902c-4726-8fdb-94b522f11a6d">
                            <div className="w-text wbaseItem-value" name-field="Text" level={5} cateid={139} id="1430b097-f91b-4e41-a828-58d20b76f2b8">Bạn chắc chắn muốn tiếp nhận hồ sơ?</div>
                        </div>
                    </div>
                </div>
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={2} cateid={140} id="19fee093-e31b-4af3-8571-4de84593e68e">
                    <button type="button" className="w-button wbaseItem-value w-row close-popup" wrap="nowrap" name-field="Button" level={3} cateid={29} id="142c8601-5bf4-4387-ae98-bbca1f126fb4">
                        <div className="w-text wbaseItem-value" name-field="Text" level={4} cateid={139} id="df583baa-5ffb-41fd-8e92-64f8b3e72d70">Hủy<br /></div>
                    </button>
                    <button onClick={() => acceptFile(code)} type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={3} cateid={29} id="6519bed4-e52f-404c-b520-01cd3dc70fce">
                        <div className="w-text wbaseItem-value" name-field="Text" level={4} cateid={139} id="fccfaf6d-3fa9-4adc-804e-845c719c6adc">Xác nhận</div>
                    </button>
                </div>
            </div>
        </div>, document.body
    );
}
export function PopupTransfer() {
    return ReactDOM.createPortal(
        <div className='popup-overlay'>
            <div className="w-frame wbaseItem-value w-col min-brp" wrap="nowrap" level={1} cateid={140} id="7d515720-85cd-4f24-a5de-d95ff4b8fda7">
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={2} cateid={140} id="9b23b9a5-320b-4bc2-a5f9-84e1c730aa0a">
                    <div className="w-text wbaseItem-value" level={3} cateid={139} id="ec637ebd-4144-4388-8641-f104e85ba97c">Chuyển hồ sơ</div>
                    <div className="w-svg wbaseItem-value" level={3} cateid={115} id="1eb7ad24-e145-424a-8211-56b145e8d1c9">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4144 12.0002L20.4144 5.00015L19.0002 3.58594L12.0002 10.5859L5.00015 3.58594L3.58594 5.00015L10.5859 12.0002L3.58594 19.0002L5.00015 20.4144L12.0002 13.4144L19.0002 20.4144L20.4144 19.0002L13.4144 12.0002Z" fill="#28282999" style={{ mixBlendMode: 'multiply' }} />
                        </svg>
                    </div>
                </div>
                <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={2} cateid={140} id="ed7e0070-9790-4a2f-a6e6-28e67ec77ccf">
                    <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={3} cateid={140} id="effb60d8-5ccb-4401-815d-c54c79e1b3fd">
                        <div className="w-text wbaseItem-value" level={4} cateid={139} id="9cadfc2b-5689-4bad-b656-e9107cd27edd">Cán bộ nhận hồ sơ</div>
                        <div className="w-textformfield wbaseItem-value w-row" wrap="nowrap" name-field="Textformfield" level={4} cateid={85} id="0c166ee3-e4fa-437e-805a-06d3fd7cb6fd">
                            <div className="wbaseItem-value" name-field="Textfield" level={5} cateid={86} id="0f6fcbc3-2da1-44f3-b521-b0b1b2b368a6">
                                <div className="textfield">
                                    <input id="textfield-0f6fcbc3-2da1-44f3-b521-b0b1b2b368a6" name="Textformfield" placeholder="Chọn account cán bộ" />
                                </div>
                            </div>
                            <div className="w-svg wbaseItem-value" level={5} cateid={115} id="3ea8677a-7c54-429a-9c79-54fb0c8b1588">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.41046 8.01097C5.03087 7.66301 4.42368 7.66301 4.04408 8.01097C3.65197 8.37041 3.65197 8.96293 4.04408 9.32236L11.3168 15.989C11.6964 16.337 12.3036 16.337 12.6832 15.989L19.9559 9.32236C20.348 8.96293 20.348 8.37041 19.9559 8.01097C19.5763 7.66301 18.9691 7.66301 18.5895 8.01097L12 14.0514L5.41046 8.01097Z" fill="#28282999" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={2} cateid={140} id="a20e5f14-dcaf-4207-bfb9-006da52238a1">
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={3} cateid={140} id="0696d771-adc1-4fbd-8a98-3261275db82c">
                        <div className="w-text wbaseItem-value" name-field="Text" level={4} cateid={139} id="3cae7467-1251-44ed-bdef-beef747e64f7">Hủy</div>
                    </div>
                    <div className="w-frame wbaseItem-value w-row" wrap="nowrap" level={3} cateid={140} id="f8b6cf4b-4616-4563-a040-0603436bac93">
                        <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={4} cateid={29} id="fa3ddd2a-2c1c-44d4-a162-499943240a3b">
                            <div className="w-text wbaseItem-value" name-field="Text" level={5} cateid={139} id="b5b5176a-5e82-438b-aa3f-301b143108b1">Xác nhận</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>, document.body
    );
}