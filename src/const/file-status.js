export class FileStatus {
    static KHOI_TAO_HO_SO = 1;
    static XU_LY_THAM_DINH = 2;
    static BO_SUNG_HO_SO = 3;
    static CHO_PHE_DUYET = 4;
    static BO_SUNG_THAM_DINH = 5;
    static TU_CHOI_PHE_DUYET = 6;
    static DA_PHE_DUYET = 7;
    static CHO_KY_HOP_DONG = 8;
    static YEU_CAU_GIAI_NGAN = 9;
    static BO_XUNG_GIAI_NGAN = 10;
    static XU_LY_GIAI_NGAN = 11;
    static TU_CHOI_GIAI_NGAN = 12;
    static HOAN_THANH = 13;
    static DA_HUY = 14;

    static get_status(status) {
        switch (status) {
            case FileStatus.KHOI_TAO_HO_SO:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level="{2}" cateid="{29}" id="cc722ef8-53f3-4cf0-a702-1060ba4aeb3c">
                        <div className="w-text wbaseItem-value" name-field="Text" level="{3}" cateid="{139}" id="eb1d8d0a-87f4-4e49-8ff0-71b7531bd5ce">Khởi tạo hồ sơ</div>
                    </button>
                )
            case FileStatus.XU_LY_THAM_DINH:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="904bd58b-fb5c-4389-96ab-6ceb116a5854">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="c1e97a8b-11ca-42c9-8f4a-96b88a8ef40f">Xử lý thẩm định</div>
                    </button>
                )
            case FileStatus.BO_SUNG_HO_SO:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="9fa5833d-dd35-4e85-a2ca-2bb30442a5f4">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="f64e180e-3ebe-470f-88b7-c49835b7551d">Bổ sung hồ sơ</div>
                    </button>
                )
            case FileStatus.CHO_PHE_DUYET:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="2cd9c326-3b85-4c42-9b50-9e82d63bd021">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="e14e7218-3eea-497e-982e-626d749601c9">Chờ phê duyệt</div>
                    </button>
                )
            case FileStatus.BO_SUNG_THAM_DINH:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="18ca50af-0057-4034-8789-efe13d10cd75">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="5cc3cd54-c3b7-475d-bd47-b214b0186084">Bổ sung thẩm định</div>
                    </button>
                )
            case FileStatus.TU_CHOI_PHE_DUYET:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="f07f7243-c79a-41e6-8331-27347de10c5c">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="3372ca26-a2fc-4f98-ab3e-ed1645e497be">Từ chối phê duyệt</div>
                    </button>
                )
            case FileStatus.DA_PHE_DUYET:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="3ed6375d-7d2b-4556-836e-0dd4151054d6">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="e075fb16-1f01-4e8c-8e56-5cf31d3a366c">Đã phê duyệt</div>
                    </button>
                )
            case FileStatus.CHO_KY_HOP_DONG:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="8e70fc3e-90d6-4037-9d9d-9374acd898de">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="8cb25e41-1981-4ec1-b47c-62d91ccdf2b6">Chờ ký hợp đồng</div>
                    </button>
                )
            case FileStatus.YEU_CAU_GIAI_NGAN:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="f0238c94-4ea7-4479-9b97-9829d57b9a68">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="0456c71d-01b2-4bce-94de-e9392810c2f3">Yêu cầu giải ngân</div>
                    </button>
                )
            case FileStatus.BO_XUNG_GIAI_NGAN:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="1a320ab9-1a3f-4765-a0d4-30a9899cc54b">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="dd0076eb-9e30-4deb-8c9b-6a81b9398509">Bổ sung giải ngân</div>
                    </button>
                )
            case FileStatus.XU_LY_GIAI_NGAN:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="482900f9-cfad-4d78-b23f-b35c5bb4f8ed">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="93642161-23fd-43fd-9897-feaf6d7553cb">Xử lý giải ngân</div>
                    </button>
                )
            case FileStatus.TU_CHOI_GIAI_NGAN:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="fbdfc6d7-ee2c-444f-9ddf-7e8efa119fac">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="083fdc0e-9282-4912-a136-ff477616b6b7">Từ chối giải ngân</div>
                    </button>
                )
            case FileStatus.HOAN_THANH:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="eadd2c5d-e811-4f3e-9934-2dacf0e9402a">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="38662a33-df93-442d-830c-0d71ce5e816f">Hoàn thành</div>
                    </button>
                )
            case FileStatus.DA_HUY:
                return (
                    <button type="button" className="w-button wbaseItem-value w-row" wrap="nowrap" name-field="Button" level={2} cateid={29} id="d88b9261-f9c6-4502-b06a-1f758294bbf0">
                        <div className="w-text wbaseItem-value" name-field="Text" level={3} cateid={139} id="3c545c2a-b384-4c0f-b00c-7f24ee9499f1">Đã hủy</div>
                    </button>
                )
            default:
        }
    }

    static navigation_router(status, pathName) {
        switch (status) {
            case FileStatus.KHOI_TAO_HO_SO:
                return pathName + "/xem-ho-so-vay";
            case FileStatus.XU_LY_THAM_DINH:
                return pathName + "/xu-ly-tham-dinh";
            case FileStatus.BO_SUNG_HO_SO:
                return pathName + "/";
            case FileStatus.CHO_PHE_DUYET:
                return pathName + "/";
            case FileStatus.BO_SUNG_THAM_DINH:
                return pathName + "/";
            case FileStatus.TU_CHOI_PHE_DUYET:
                return pathName + "/";
            case FileStatus.DA_PHE_DUYET:
                return pathName + "/tao-hop-dong";
            case FileStatus.CHO_KY_HOP_DONG:
                return pathName + "/ky-hop-dong";
            case FileStatus.YEU_CAU_GIAI_NGAN:
                return pathName + "/yeu-cau-giai-ngan";
            case FileStatus.BO_XUNG_GIAI_NGAN:
                return pathName + "/bo-xung-giai-ngan";
            case FileStatus.XU_LY_GIAI_NGAN:
                return pathName + "/xu-ly-giai-ngan";
            case FileStatus.TU_CHOI_GIAI_NGAN:
                return pathName + "/";
            case FileStatus.HOAN_THANH:
                return pathName + "/";
            case FileStatus.DA_HUY:
                return pathName + "/";
            default:
        }
    }
}