import $ from "jquery";
import { Ultis } from "./utils";

const txtfd_eye_on = `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.535 11.0314C20.2527 9.21757 16.7559 5 12.0001 5C7.24426 5 3.75156 9.21757 2.46429 11.0322C2.16215 11.4615 2 11.9737 2 12.4986C2 13.0236 2.16215 13.5357 2.46429 13.965V13.965C3.75156 15.7797 7.24426 19.9973 12.0001 19.9973C16.7559 19.9973 20.2527 15.7797 21.5358 13.965C21.838 13.5356 22.0001 13.0232 22 12.4981C21.9999 11.973 21.8374 11.4607 21.535 11.0314V11.0314ZM12.0001 16.6646C11.1761 16.6646 10.3707 16.4202 9.6856 15.9625C9.00052 15.5047 8.46657 14.8541 8.15126 14.0929C7.83595 13.3316 7.75345 12.494 7.9142 11.6859C8.07494 10.8778 8.4717 10.1355 9.05432 9.5529C9.63693 8.97028 10.3792 8.57352 11.1873 8.41278C11.9954 8.25203 12.8331 8.33453 13.5943 8.64984C14.3555 8.96515 15.0061 9.4991 15.4639 10.1842C15.9216 10.8693 16.166 11.6747 16.166 12.4986C16.166 13.6035 15.7271 14.6631 14.9458 15.4444C14.1645 16.2256 13.1049 16.6646 12.0001 16.6646V16.6646Z" fill="#00204D" fill-opacity="0.6" style="mix-blend-mode:multiply"/></svg>`;
const txtfd_eye_off = `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.535 10.5207C20.9132 9.64509 20.2186 8.82344 19.4587 8.0645L16.1085 11.4147C16.1408 11.6043 16.16 11.7958 16.166 11.988C16.166 13.0928 15.7271 14.1524 14.9458 14.9337C14.1645 15.715 13.1049 16.1539 12.0001 16.1539C11.8079 16.1479 11.6164 16.1287 11.4268 16.0964L8.71316 18.81C9.7535 19.25 10.8705 19.4799 12.0001 19.4866C16.7559 19.4866 20.2527 15.269 21.5358 13.4544C21.838 13.0249 22.0002 12.5125 22 11.9874C21.9999 11.4623 21.8374 10.95 21.535 10.5207Z" fill="#00204D" fill-opacity="0.6" style="mix-blend-mode:multiply"/><path d="M12.0001 4.48931C7.24426 4.48931 3.75156 8.70688 2.46429 10.5216C2.16215 10.9508 2 11.463 2 11.988C2 12.5129 2.16215 13.0251 2.46429 13.4544C3.56373 15.0216 4.90982 16.4003 6.45023 17.5369L9.0531 14.9341C8.6662 14.5472 8.35929 14.088 8.14989 13.5825C7.94048 13.0771 7.83268 12.5354 7.83264 11.9882C7.83257 10.8833 8.27143 9.8236 9.05268 9.04223C9.83393 8.26087 10.8936 7.82186 11.9985 7.82178C13.1035 7.82171 14.1632 8.26057 14.9445 9.04182L9.0531 14.9341L17.5524 6.43562C15.952 5.21981 14.0093 4.53883 12.0001 4.48931Z" fill="#00204D" fill-opacity="0.6" style="mix-blend-mode:multiply"/><path d="M2.83505 21.9861C2.67029 21.9861 2.50924 21.9372 2.37226 21.8457C2.23527 21.7541 2.12851 21.624 2.06546 21.4718C2.00242 21.3196 1.98592 21.1521 2.01805 20.9905C2.05018 20.8289 2.12951 20.6804 2.24599 20.5639L20.576 2.23388C20.7331 2.08211 20.9436 1.99813 21.1621 2.00003C21.3805 2.00193 21.5895 2.08955 21.744 2.24403C21.8985 2.39851 21.9861 2.60748 21.988 2.82594C21.9899 3.0444 21.9059 3.25486 21.7541 3.412L3.42411 21.742C3.2679 21.8983 3.05601 21.9861 2.83505 21.9861Z" fill="#00204D" fill-opacity="0.6" style="mix-blend-mode:multiply"/></svg>`;

var svgRegex = /(fill|stroke)="[^none](\w|\d|#){1,}"/g;
class EnumCate {
    // Skin
    static color = 2;
    static style = 3;
    static typography = 17;
    static border = 361;
    static effect = 360;
    //
    // component
    static datePicker = 24;
    static button = 29;
    // static ? = 67;
    // static ? = 68;
    // static ? = 70;
    // static ? = 72;
    // static ? = 73;
    // static ? = 75;
    // static ? = 76;
    // static ? = 78;
    static checkbox = 79;
    static w_switch = 81;
    // static ? = 84;
    static textformfield = 85;
    static textfield = 86;
    // static ? = 89;
    static radio_button = 90;
    static tab = 91;
    static tab_bar = 92;
    static tab_view = 93;
    // static ? = 94;
    static progress_bar = 102;
    static progress_circle = 104;
    // static ? = 105;
    // static ? = 106;
    // static ? = 107;
    // static ? = 108;
    // static ? = 109;
    // static ? = 110;
    // static ? = 111;
    // static ? = 112;
    // static ? = 113;
    // static ? = 114;
    static svg = 115;
    static table = 117;
    // static ? = 118;
    // static ? = 119;
    static toolbar = 120;
    static form = 128;
    // static ? = 129;
    static frame = 362;
    static spacing = 363;
    static view = 134;
    static carousel = 136;
    static view_fullLayout = 135;
    static tool_rectangle = 138;
    static tool_text = 139;
    static tool_frame = 140;
    // static ? = 142;
    static tool_variant = 238;
    // static ? = 239;
    static chart = 240;
    static tree = 241;
    // static tab_bar = 242;

    static scale_size_component = [
        this.checkbox,
        this.w_switch,
        this.radio_button,
    ];

    static extend_frame = [this.tool_frame, this.form];

    static output_cate = [
        this.radio_button,
        this.w_switch,
        this.checkbox,
        this.textformfield
    ];

    static parent_cate = [
        this.tool_frame,
        this.form,
        this.textformfield,
        this.button,
        this.table,
        this.tree,
        this.carousel,
    ];

    static no_child_component = [
        this.tool_rectangle,
        this.tool_text,
        this.checkbox,
        this.progress_bar,
        this.progress_circle,
        this.radio_button,
        this.w_switch,
        this.svg
    ];

    static noImgBg = [this.svg, ...this.scale_size_component, this.table, this.tree, this.chart, this.carousel];

    static show_name = [this.tool_frame, this.form, this.tool_variant];

    static data_component = [this.tree, this.chart, this.carousel, this.table];
}

class WCarouselEffect {
    static fade = "fade";
    static easeInOut = "ease-in-out";
}

//
const brpRegex = /\(([^)-]+)\)/g;
const responsiveJson = {
    Column: 24,
    BreakPoint: [
        // {
        //     Key: "X-small (xs)",
        //     Width: 480
        // },
        {
            Key: "Small (sm)",
            Width: 576,
        },
        {
            Key: "Medium (md)",
            Width: 768,
        },
        {
            Key: "Large (lg)",
            Width: 992,
        },
        {
            Key: "X-large (xl)",
            Width: 1200,
        },
        {
            Key: "XX-large (xxl)",
            Width: 1600,
        },
    ],
};

const resizePage = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        let framePage = entry.target;
        setResponsivePage(framePage);
    });
});

export function onloadhtml() {
    document.body
        .querySelectorAll(".wbaseItem-value")
        .forEach((wbaseHTML) => {
            if (wbaseHTML.classList.contains("w-page")) {
                setResponsivePage(wbaseHTML);
                resizePage.observe(wbaseHTML);
            } else {
                switch (parseInt(wbaseHTML.getAttribute("cateid"))) {
                    case EnumCate.frame:
                        resizePage.observe(wbaseHTML);
                        break;
                    case EnumCate.form:
                        resizePage.observe(wbaseHTML);
                        break;
                    case EnumCate.textformfield:
                        break;
                    case EnumCate.w_switch:
                        break;
                    case EnumCate.checkbox:
                        drawCheckMark(wbaseHTML);
                        break;
                    case EnumCate.radio_button:
                        break;
                    case EnumCate.tree:
                        break;
                    case EnumCate.table:
                        break;
                    case EnumCate.chart:
                        // const config = JSON.parse(wbaseHTML.getAttribute("config"));
                        // let chartCanvas = wbaseHTML.querySelector(":scope > canvas");
                        // new Chart(chartCanvas, config);
                        break;
                    case EnumCate.carousel:
                        if (wbaseHTML.classList.contains("autoplay")) {
                            playCarousel(wbaseHTML);
                        }
                        break;
                    default:
                        break;
                }
            }
        });
}

function setResponsivePage(framePage) {
    let brpShortName = responsiveJson.BreakPoint.map((brp) =>
        brp.Key.match(brpRegex).pop().replace(/[()]/g, "")
    );
    let listClass = [...framePage.classList].filter((clName) =>
        ["min-brp", ...brpShortName].every((brpKey) => clName !== brpKey)
    );
    let closestBrp = responsiveJson.BreakPoint.filter(
        (brp) => framePage.offsetWidth >= brp.Width
    );
    if (closestBrp.length > 0) {
        closestBrp = closestBrp
            .pop()
            .Key.match(brpRegex)
            .pop()
            .replace(/[()]/g, "");
        listClass.push(closestBrp);
    } else {
        listClass.push("min-brp");
    }
    framePage.className = listClass.join(" ");
}

function drawCheckMark(checkboxHTML) {
    let checkboxSize = checkboxHTML.offsetWidth > 0 ? checkboxHTML.offsetWidth : parseFloat(checkboxHTML.style.width.replace("px", ""));
    checkboxHTML.querySelector(".checkmark").width = checkboxSize;
    checkboxHTML.querySelector(".checkmark").height = checkboxSize;
    let checkboxCtx = checkboxHTML.querySelector(".checkmark").getContext("2d");
    checkboxCtx.clearRect(0, 0, checkboxSize, checkboxSize);
    checkboxCtx.save();
    checkboxCtx.beginPath();
    checkboxCtx.lineWidth = checkboxSize / 16;
    checkboxCtx.strokeStyle = `#${checkboxHTML.querySelector(".checkmark").getAttribute("checkcolor").substring(2)}${checkboxHTML.querySelector(".checkmark").getAttribute("checkcolor").substring(0, 2)}`;
    checkboxCtx.moveTo(checkboxSize * 0.28, checkboxSize * 0.48);
    checkboxCtx.lineTo(checkboxSize * 0.45, checkboxSize * 0.65);
    checkboxCtx.lineTo(checkboxSize * 0.75, checkboxSize * 0.3);
    checkboxCtx.lineCap = "round";
    checkboxCtx.stroke();
}

function playCarousel(carousel) {
    let slideTrack = carousel.querySelector(".slide-track");
    let slides = carousel.querySelectorAll(".slide-clone");
    let count = [...slides].find(slide => slide.getAttribute("isactive") === "true").getAttribute("data-index");
    count = parseInt(count) + 1;
    let transitionTime = parseInt(carousel.getAttribute("transition-ms"));
    let transformTime = parseInt(carousel.getAttribute("transform-ms"));
    let isFade = carousel.getAttribute("effect") === WCarouselEffect.fade;
    carousel.playInterval = setInterval(() => {
        if (isFade) {
            $(slides[count - 1]).fadeOut(transformTime);
            slides[count - 1].removeAttribute("isactive");
            count++;
            if (count === slides.length + 1) {
                $(slides[0]).fadeIn(transformTime);
                slides[0].setAttribute("isactive", "true");
                count = 1;
            } else {
                $(slides[count - 1]).fadeIn(transformTime);
                slides[count - 1].setAttribute("isactive", "true");
            }
        } else {
            slides[count - 1].removeAttribute("isactive");
            slideTrack.style.transition = `transform ${transformTime}ms ease-in-out`;
            slideTrack.style.transform = `translateX(calc(-100% * ${count}))`;
            count++;
            if (count === slides.length) {
                slides[0].setAttribute("isactive", "true");
                count = 1;
                setTimeout(function () {
                    slideTrack.style.transition = `none`;
                    slideTrack.style.transform = `translateX(0px)`;
                }, transformTime + 100);
            } else {
                slides[count - 1].setAttribute("isactive", "true");
            }
        }
    }, transitionTime);
}

function stopCarousel(carousel) {
    clearInterval(carousel.playInterval);
    carousel.playInterval = null;
}

function runPrevSlide(carousel) {
    stopCarousel(carousel);
    let slideTrack = carousel.querySelector(".slide-track");
    let slides = carousel.querySelectorAll(".slide-clone");
    let count = [...slides].find(slide => slide.getAttribute("isactive") === "true").getAttribute("data-index");
    count = parseInt(count);
    let transformTime = parseInt(carousel.getAttribute("transform-ms"));
    let isFade = carousel.getAttribute("effect") === WCarouselEffect.fade;
    if (isFade) {
        $(slides[count]).fadeOut(transformTime);
        slides[count].removeAttribute("isactive");
        if (count === 0) {
            slides[slides.length - 1].fadeIn(transformTime);
            slides[slides.length - 1].setAttribute("isactive", "true");
        } else {
            $(slides[count - 1]).fadeIn(transformTime);
            slides[count - 1].setAttribute("isactive", "true");
        }
    } else {
        slides[count].removeAttribute("isactive");
        slideTrack.style.transition = `transform ${transformTime}ms ease-in-out`;
        if (count === 0) {
            slideTrack.style.transform = `translateX(calc(-100% * ${slides.length - 2}))`;
            slides[slides.length - 2].setAttribute("isactive", "true");
        } else {
            slideTrack.style.transform = `translateX(calc(-100% * ${slides.length - 1}))`;
            slides[count - 1].setAttribute("isactive", "true");
        }
    }
    playCarousel(carousel);
}

function runNextSlide(carousel) {
    stopCarousel(carousel);
    let slideTrack = carousel.querySelector(".slide-track");
    let slides = carousel.querySelectorAll(".slide-clone");
    let count = [...slides].find(slide => slide.getAttribute("isactive") === "true").getAttribute("data-index");
    count = parseInt(count);
    let transformTime = parseInt(carousel.getAttribute("transform-ms"));
    let isFade = carousel.getAttribute("effect") === WCarouselEffect.fade;
    if (isFade) {
        $(slides[count]).fadeOut(transformTime);
        slides[count].removeAttribute("isactive");
        count++;
        if (count === slides.length) {
            $(slides[0]).fadeIn(transformTime);
            slides[0].setAttribute("isactive", "true");
        } else {
            $(slides[count]).fadeIn(transformTime);
            slides[count].setAttribute("isactive", "true");
        }
    } else {
        slides[count].removeAttribute("isactive");
        slideTrack.style.transition = `transform ${transformTime}ms ease-in-out`;
        count++;
        slideTrack.style.transform = `translateX(calc(-100% * ${count}))`;
        if (count === slides.length - 1) {
            slides[0].setAttribute("isactive", "true");
            setTimeout(function () {
                slideTrack.style.transition = `none`;
                slideTrack.style.transform = `translateX(0px)`;
            }, transformTime + 100);
        } else {
            slides[count].setAttribute("isactive", "true");
        }
    }
    playCarousel(carousel);
}

$("body").on("change", `.wbaseItem-value.w-switch input[type="checkbox"]`, function (e) {
    $(this).parents(".wbaseItem-value.w-switch")[0].value = e.target.checked;
})

$("body").on("change", `.wbaseItem-value.w-check-box input[type="checkbox"]`, function (e) {
    $(this).parents(".wbaseItem-value.w-check-box")[0].value = e.target.checked;
})

$("body").on("change", `.wbaseItem-value.w-radio-btn input[type="checkbox"]`, function (e) {
    $(this).parents(".wbaseItem-value.w-radio-btn")[0].value = e.target.checked;
    if (e.target.checked) {
        if (e.target.name && e.target.name !== "") {
            let formParent = document.querySelector(`form:has(#${e.target.id})`);
            if (formParent) {
                [...formParent.querySelectorAll(`input[name="${e.target.name}"]`)]
                    .filter(radio => radio.type === "radio" && radio.id !== e.target.id)
                    .forEach(radio => {
                        $(radio).trigger("change");
                    });
            } else {
                [...document.getElementsByName(e.target.name)]
                    .filter(radio => radio.type === "radio" && radio.id !== e.target.id)
                    .forEach(radio => {
                        $(radio).trigger("change");
                    });
            }
        }
    }
})

$("body").on("click", `.wbaseItem-value.w-tree .tile-item > .btn-tree-action`, function (e) {
    e.stopPropagation();
    let isHideChildren = !e.target.className.includes("right");
    if (isHideChildren) {
        e.target.className = e.target.className.replace("down", "right");
    } else {
        e.target.className = e.target.className.replace("right", "down");
    }
})

$("body").on("click", `.wbaseItem-value.w-carousel > .slide-arrow`, function (e) {
    e.stopPropagation();
    if (this.classList.contains("slide-prev")) {
        runPrevSlide(this.parentElement);
    } else {
        runNextSlide(this.parentElement);
    }
})

$("body").on("click", `.wbaseItem-value.w-textformfield .suffix-btn-txtfd.eye-icon`, function (e) {
    e.stopPropagation();
    let input = this.parentElement.querySelector(":scope > .textfield > input");
    let color = this.innerHTML.match(svgRegex)[0];
    let isShowPass = input.type === "text";
    if (isShowPass) {
        input.type = "text";
        this.innerHTML = txtfd_eye_on.replaceAll('fill="#00204D"', color);
    } else {
        input.type = "password";
        this.innerHTML = txtfd_eye_off.replaceAll('fill="#00204D"', color);
    }
})

$("body").on("focus", `.w-textformfield > :not(.wbaseItem-value:has(> .calendar-icon)) > .textfield > input`, function (e) {
    e.stopPropagation();
    e.stopPropagation();
    this.value = this.value.trim();
    $(this.parentElement).removeClass("content");
    if (this.value.trim() !== "") {
        $(this.parentElement).addClass("content");
    }
    else {
        this.placeholder = $(this).parents(".wbaseItem-value.w-textformfield")[0].getAttribute("placeholder") ?? "";
    }
});

$("body").on("blur", `.w-textformfield > :not(.wbaseItem-value:has(> .calendar-icon)) > .textfield > input`, function (e) {
    e.stopPropagation();
    this.value = this.value.trim();
    $(this.parentElement).removeClass("content");
    if (this.value.trim() !== "") {
        $(this.parentElement).addClass("content");
    } else if (this.parentElement.querySelector("label")) {
        this.placeholder = "";
    } else {
        this.placeholder = $(this).parents(".wbaseItem-value.w-textformfield")[0].getAttribute("placeholder") ?? "";
    }
})

const today = new Date();
const startDate = new Date(
    today.getFullYear() - 100,
    today.getMonth(),
    today.getDate()
);
const endDate = new Date(
    today.getFullYear() + 100,
    today.getMonth(),
    today.getDate()
);

function differentInDay(date1, date2) {
    return (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
}
function inRangeTime(date, startDate, endDate) {
    return (
        differentInDay(date, startDate) > -1 &&
        differentInDay(endDate, date) > -1
    );
}

$("body").on("focus", `.w-textformfield > .wbaseItem-value:has(> .calendar-icon) > .textfield > input`, function (e) {
    e.stopPropagation();
    if (this.getAttribute("onshowpicker") === "true") {
        this.removeAttribute("onshowpicker");
    } else {
        let input = this;
        let pickerType = $(input).parents(`.wbaseItem-value:has(> .textfield)`)[0].getAttribute("type");
        let inputValue = (input.initValue ?? input.value).trim();
        let selectDate;
        let selectMonth;
        let selectYear;
        switch (pickerType) {
            case "year":
                input.maxLength = 4;
                if (inputValue !== "" && !isNaN(parseInt(inputValue))) {
                    selectYear = parseInt(inputValue);
                } else {
                    selectYear = today.getFullYear();
                }
                break;
            case "month":
                input.maxLength = 7;
                if (inputValue !== "" && inputValue.match(/[0-9]{1,2}(\/|-)[0-9]{4}/g)) {
                    let splitInput = inputValue.replaceAll("-", "/").split("/");
                    selectYear = parseInt(splitInput[1]);
                    selectMonth = parseInt(splitInput[0]) - 1;
                } else {
                    selectYear = today.getFullYear();
                    selectMonth = today.getMonth();
                }
                selectDate = new Date(selectYear, selectMonth);
                break;
            default:
                input.maxLength = 10;
                if (inputValue !== "" && inputValue.match(/[0-9]{1,2}(\/|-)[0-9]{1,2}(\/|-)[0-9]{4}/g)) {
                    let splitInput = inputValue.replaceAll("-", "/").split("/");
                    selectYear = parseInt(splitInput[2]);
                    selectMonth = parseInt(splitInput[1]) - 1;
                    selectDate = new Date(selectYear, selectMonth, parseInt(splitInput[0]));
                } else {
                    selectYear = today.getFullYear();
                    selectMonth = today.getMonth();
                    selectDate = new Date(selectYear, selectMonth, today.getDate());
                }
                break;
        }
        let pickerContainer = document.createElement("div");
        pickerContainer.className = "w-date-picker-popup";
        let header = document.createElement("div");
        header.className = "header";
        let iconDoubleLeft = document.createElement("i");
        iconDoubleLeft.className = "fa-solid fa-angles-left";
        let iconLeft = document.createElement("i");
        iconLeft.className = "fa-solid fa-angle-left";
        iconLeft.style.marginLeft = "12px";
        let iconRight = document.createElement("i");
        iconRight.className = "fa-solid fa-angle-right";
        iconRight.style.marginRight = "12px";
        let iconDoubleRight = document.createElement("i");
        iconDoubleRight.className = "fa-solid fa-angles-right";
        iconDoubleLeft.onclick = function () { };
        let title = document.createElement("span");
        header.replaceChildren(
            iconDoubleLeft,
            iconLeft,
            title,
            iconRight,
            iconDoubleRight
        );
        let dateTable = document.createElement("div");
        dateTable.className = "body";
        function showDateInMonth(focusDate) {
            if (focusDate) {
                selectDate = focusDate;
                selectMonth = focusDate.getMonth();
                selectYear = focusDate.getFullYear();
            }
            let monthName = "";
            switch (selectMonth) {
                case 0:
                    monthName = "January";
                    break;
                case 1:
                    monthName = "February";
                    break;
                case 2:
                    monthName = "March";
                    break;
                case 3:
                    monthName = "April";
                    break;
                case 4:
                    monthName = "May";
                    break;
                case 5:
                    monthName = "June";
                    break;
                case 6:
                    monthName = "July";
                    break;
                case 7:
                    monthName = "August";
                    break;
                case 8:
                    monthName = "September";
                    break;
                case 9:
                    monthName = "October";
                    break;
                case 10:
                    monthName = "November";
                    break;
                case 11:
                    monthName = "December";
                    break;
                default:
                    break;
            }
            title.innerHTML = `${monthName} ${selectYear}`;
            let lineWeekDay = document.createElement("div");
            for (let i = 0; i < 7; i++) {
                let weekday = document.createElement("div");
                weekday.className = "date-picker-circle";
                let weekdayTitle = "";
                switch (i) {
                    case 0:
                        weekdayTitle = "Su";
                        break;
                    case 1:
                        weekdayTitle = "Mo";
                        break;
                    case 2:
                        weekdayTitle = "Tu";
                        break;
                    case 3:
                        weekdayTitle = "We";
                        break;
                    case 4:
                        weekdayTitle = "Th";
                        break;
                    case 5:
                        weekdayTitle = "Fr";
                        break;
                    case 6:
                        weekdayTitle = "Sa";
                        break;
                    default:
                        break;
                }
                weekday.innerHTML = weekdayTitle;
                lineWeekDay.appendChild(weekday);
            }
            //
            let firstDayOfMonth = new Date(selectYear, selectMonth, 1);
            let dateWeekLines = [];
            for (let j = 0; j < 6; j++) {
                let lineDate = document.createElement("div");
                for (let i = 0; i < 7; i++) {
                    let dateHTML = document.createElement("div");
                    dateHTML.className = "date-picker-circle";
                    let dateNumber = i + j + j * 6 - firstDayOfMonth.getDay();
                    const timeValue = new Date(
                        selectYear,
                        selectMonth,
                        dateNumber + 1
                    );
                    if (dateNumber + 1 === today.getDate() && selectMonth === today.getMonth() && selectYear === today.getFullYear()) {
                        dateHTML.style.border = "1px solid #366AE2";
                    }
                    if (!inRangeTime(timeValue, startDate, endDate)) {
                        dateHTML.setAttribute("in-range", "false");
                    } else if (selectDate.valueOf() === timeValue.valueOf()) {
                        dateHTML.setAttribute("selected", "true");
                    } else if (timeValue.getMonth() !== selectMonth) {
                        dateHTML.style.color = "#9FB0C7";
                    }
                    dateHTML.innerHTML = timeValue.getDate();
                    dateHTML.onclick = function () {
                        selectDate = timeValue;
                        input.initValue = Ultis.datetoString(timeValue, "dd/MM/yyyy", "/");
                        input.value = input.initValue;
                        input.removeAttribute("onshowpicker");
                        pickerContainer.remove();
                    };
                    lineDate.appendChild(dateHTML);
                }
                dateWeekLines.push(lineDate);
            }
            dateTable.replaceChildren(lineWeekDay, ...dateWeekLines);
            //
            iconDoubleLeft.onclick = function () {
                selectYear--;
                firstDayOfMonth = new Date(selectYear, selectMonth, 1);
                showDateInMonth();
            };
            iconLeft.onclick = function () {
                firstDayOfMonth = new Date(selectYear, selectMonth - 1, 1);
                selectMonth = firstDayOfMonth.getMonth();
                selectYear = firstDayOfMonth.getFullYear();
                showDateInMonth();
            };
            title.onclick = showMonthInYear;
            iconDoubleRight.onclick = function () {
                selectYear++;
                firstDayOfMonth = new Date(selectYear, selectMonth, 1);
                showDateInMonth();
            };
            iconRight.onclick = function () {
                firstDayOfMonth = new Date(selectYear, selectMonth + 1, 1);
                selectMonth = firstDayOfMonth.getMonth();
                selectYear = firstDayOfMonth.getFullYear();
                showDateInMonth();
            };
            //
        }
        function showMonthInYear(focusDate) {
            if (focusDate) {
                selectDate = focusDate;
                selectMonth = focusDate.getMonth();
                selectYear = focusDate.getFullYear();
            }
            title.innerHTML = selectYear;
            let monthLines = [];
            for (let i = 0; i < 4; i++) {
                let monthLine = document.createElement("div");
                for (let j = 0; j < 3; j++) {
                    let monthHTML = document.createElement("div");
                    monthHTML.className = "month-picker-circle";
                    let monthNumber = i * 3 + j;
                    switch (monthNumber) {
                        case 0:
                            monthHTML.innerHTML = "Jan";
                            break;
                        case 1:
                            monthHTML.innerHTML = "Feb";
                            break;
                        case 2:
                            monthHTML.innerHTML = "Mar";
                            break;
                        case 3:
                            monthHTML.innerHTML = "Apr";
                            break;
                        case 4:
                            monthHTML.innerHTML = "May";
                            break;
                        case 5:
                            monthHTML.innerHTML = "Jun";
                            break;
                        case 6:
                            monthHTML.innerHTML = "Jul";
                            break;
                        case 7:
                            monthHTML.innerHTML = "Aug";
                            break;
                        case 8:
                            monthHTML.innerHTML = "Sep";
                            break;
                        case 9:
                            monthHTML.innerHTML = "Oct";
                            break;
                        case 10:
                            monthHTML.innerHTML = "Nov";
                            break;
                        case 11:
                            monthHTML.innerHTML = "Dec";
                            break;
                        default:
                            break;
                    }
                    let timeValue = new Date(selectYear, monthNumber, 1);
                    if (selectYear === today.getFullYear() && today.getMonth() === monthNumber) {
                        monthHTML.style.border = "1px solid #366AE2";
                    }
                    if (selectYear === selectDate.getFullYear() && selectDate.getMonth() === monthNumber) {
                        monthHTML.setAttribute("selected", "true");
                    }
                    monthHTML.onclick = function () {
                        if (pickerType === "month") {
                            input.initValue = Ultis.datetoString(timeValue, "dd/MM/yyyy", "/").substring(3);
                            input.value = input.initValue;
                            input.removeAttribute("onshowpicker");
                            pickerContainer.remove();
                        } else {
                            selectMonth = monthNumber;
                            showDateInMonth();
                        }
                    };
                    monthLine.appendChild(monthHTML);
                }
                monthLines.push(monthLine);
            }
            dateTable.replaceChildren(...monthLines);
            iconDoubleLeft.onclick = function () {
                if (selectYear - 10 < startDate.getFullYear()) {
                    selectYear = startDate.getFullYear();
                } else {
                    selectYear -= 10;
                }
                showMonthInYear();
            };
            iconLeft.onclick = function () {
                if (selectYear - 1 >= startDate.getFullYear()) {
                    selectYear--;
                    showMonthInYear();
                }
            };
            title.onclick = function () {
                showYearInRange(selectYear);
            };
            iconDoubleRight.onclick = function () {
                if (selectYear + 10 < endDate.getFullYear()) {
                    selectYear = endDate.getFullYear();
                } else {
                    selectYear += 10;
                }
                showMonthInYear();
            };
            iconRight.onclick = function () {
                if (selectYear + 1 <= endDate.getFullYear()) {
                    selectYear++;
                    showMonthInYear();
                }
            };
        }
        function showYearInRange(focusYear) {
            if (focusYear) selectYear = focusYear;
            let firstYearInTable =
                selectYear - ((selectYear - startDate.getFullYear()) % 12);
            title.innerHTML = `${firstYearInTable}-${firstYearInTable + 11}`;
            let yearLines = [];
            for (let i = 0; i < 4; i++) {
                let yearLine = document.createElement("div");
                for (let j = 0; j < 3; j++) {
                    let yearHTML = document.createElement("div");
                    yearHTML.className = "year-picker-circle";
                    let yearNumber = i * 3 + j + firstYearInTable;
                    yearHTML.innerHTML = yearNumber;
                    if (yearNumber === today.getFullYear()) {
                        yearHTML.style.border = "1px solid #366AE2";
                    }
                    if (selectYear === yearNumber) {
                        yearHTML.setAttribute("selected", "true");
                    }
                    yearHTML.onclick = function () {
                        if (pickerType === "year") {
                            input.initValue = yearNumber;
                            input.value = input.initValue;
                            input.removeAttribute("onshowpicker");
                            pickerContainer.remove();
                        } else {
                            selectYear = yearNumber;
                            showMonthInYear();
                        }
                    };
                    yearLine.appendChild(yearHTML);
                }
                yearLines.push(yearLine);
            }
            dateTable.replaceChildren(...yearLines);
            iconDoubleLeft.onclick = function () {
                let preRange = selectYear;
                if (preRange - 20 < startDate.getFullYear()) {
                    preRange = startDate.getFullYear();
                } else {
                    preRange -= 20;
                }
                showYearInRange(preRange);
            };
            iconLeft.onclick = function () {
                let preRange = selectYear;
                if (preRange - 10 < startDate.getFullYear()) {
                    preRange = startDate.getFullYear();
                } else {
                    preRange -= 10;
                }
                showYearInRange(preRange);
            };
            iconDoubleRight.onclick = function () {
                let nextRange = selectYear;
                if (nextRange + 20 > endDate.getFullYear()) {
                    nextRange = endDate.getFullYear();
                } else {
                    nextRange += 20;
                }
                showYearInRange(nextRange);
            };
            iconRight.onclick = function () {
                let nextRange = selectYear;
                if (nextRange + 10 > endDate.getFullYear()) {
                    nextRange = endDate.getFullYear();
                } else {
                    nextRange += 10;
                }
                showYearInRange(nextRange);
            };
        }
        let buttonToday = document.createElement("div");
        buttonToday.className = "footer";
        buttonToday.innerHTML = "Today";
        buttonToday.addEventListener("click", function () {
            selectDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            input.initValue = Ultis.datetoString(selectDate, "dd/MM/yyyy", "/");
            input.value = input.initValue;
            input.removeAttribute("onshowpicker");
            pickerContainer.remove();
        });
        switch (pickerType) {
            case "year":
                showYearInRange();
                break;
            case "month":
                showMonthInYear();
                break;
            default:
                showDateInMonth();
                break;
        }
        pickerContainer.replaceChildren(header, dateTable, buttonToday);
        let parentTxtfd = $(this).parents(".wbaseItem-value.w-textformfield")[0];
        document.body.appendChild(pickerContainer);
        function setOffset() {
            let offset = parentTxtfd.getBoundingClientRect();
            if (
                offset.bottom + pickerContainer.offsetHeight + 16 >
                document.body.offsetHeight &&
                offset.y - pickerContainer.offsetHeight - 16 > 0
            ) {
                pickerContainer.style.left = offset.x + "px";
                pickerContainer.style.top = `${offset.y - 2}px`;
            } else {
                pickerContainer.style.left = offset.x + "px";
                pickerContainer.style.top = `${offset.bottom + 2}px`;
            }
        }
        setOffset();
        $("body").on("scroll", `.wbaseItem-value[scroll="true"]:has(.wbaseItem-value[id="${parentTxtfd.id}"])`, setOffset);
        pickerContainer.addEventListener("click", function () {
            input.setAttribute("onshowpicker", "true");
        });
        input.onblur = function () {
            setTimeout(function () {
                if (input.getAttribute("onshowpicker") === "true") {
                    input.focus();
                } else if (document.body.contains(pickerContainer)) {
                    pickerContainer.remove();
                    input.value = input.value.trim();
                    switch (pickerType) {
                        case "year":
                            if (input.value !== "" && !isNaN(parseInt(input.value))) {
                                input.initValue = input.value;
                            } else if (input.initValue) {
                                input.value = input.initValue;
                            } else {
                                input.value = "";
                            }
                            break;
                        case "month":
                            if (input.value !== "" && input.value.match(/[0-9]{1,2}(\/|-)[0-9]{4}/g)) {
                                input.value = Ultis.datetoString(Ultis.stringToDate(`1/${input.value}`, "dd/MM/yyyy", "/"), "dd/MM/yyyy", "/").substring(3);
                                input.initValue = input.value;
                            } else if (input.initValue) {
                                input.value = input.initValue;
                            } else {
                                input.value = "";
                            }
                            break;
                        default:
                            if (input.value !== "" && input.value.match(/[0-9]{1,2}(\/|-)[0-9]{1,2}(\/|-)[0-9]{4}/g)) {
                                input.value = Ultis.datetoString(Ultis.stringToDate(input.value, "dd/MM/yyyy", "/"), "dd/MM/yyyy", "/");
                                input.initValue = input.value;
                            } else if (input.initValue) {
                                input.value = input.initValue;
                            } else {
                                input.value = "";
                            }
                            break;
                    }
                    input.value = input.value.trim();
                    $(input.parentElement).removeClass("content");
                    if (input.value.trim() !== "") {
                        $(input.parentElement).addClass("content");
                    } else if (input.parentElement.querySelector("label")) {
                        input.placeholder = "";
                    } else {
                        input.placeholder = $(input).parents(".wbaseItem-value.w-textformfield")[0].getAttribute("placeholder") ?? "";
                    }
                }
            }, 150);
        };
        input.oninput = function () {
            input.value = input.value.trim();
            if (!document.body.contains(pickerContainer)) {
                document.body.appendChild(pickerContainer);
            }
            switch (pickerType) {
                case "year":
                    if (input.value !== "" && !isNaN(parseInt(input.value))) {
                        showYearInRange(parseInt(input.value));
                    }
                    break;
                case "month":
                    if (input.value !== "" && input.value.match(/[0-9]{1,2}(\/|-)[0-9]{4}/g)) {
                        let splitInput = input.value.replaceAll("-", "/").split("/");
                        showMonthInYear(new Date(parseInt(splitInput[1]), parseInt(splitInput[0]) - 1));
                    }
                    break;
                default:
                    if (input.value !== "" && input.value.match(/[0-9]{1,2}(\/|-)[0-9]{1,2}(\/|-)[0-9]{4}/g)) {
                        let splitInput = input.value.replaceAll("-", "/").split("/");
                        showDateInMonth(new Date(parseInt(splitInput[2]), parseInt(splitInput[1]) - 1, parseInt(splitInput[0])));
                    }
                    break;
            }
        }
    }
})