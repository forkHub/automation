import { dialog } from "./Dialog.js";
import { Param } from "./Param.js";
import { Util } from "./Util.js";
export class Umum {
    formPostJSONHandler(form) {
        form.onsubmit = () => {
            console.log('form on submit');
            try {
                console.log('form on submit, action= ' + form.action);
                let formData = this.formPopulate(form);
                console.log(form.action);
                Util.Ajax("post", form.action, JSON.stringify(formData)).then((xml) => {
                    console.log('xml finish, status ' + xml.status);
                    if (xml.status >= 200 && (xml.status <= 300)) {
                        console.debug('ajax sukses');
                        console.debug(xml.responseText);
                        if (form.hasAttribute(Param.HA_DLG)) {
                            dialog.tampil(form.getAttribute(Param.HA_DLG));
                            dialog.okTbl.onclick = () => {
                                if (form.hasAttribute(Param.HA_URL)) {
                                    window.top.location.href = form.getAttribute(Param.HA_URL);
                                }
                            };
                        }
                        else if (form.hasAttribute(Param.HA_URL)) {
                            window.top.location.href = form.getAttribute(Param.HA_URL);
                        }
                    }
                    else {
                        throw Error(xml.responseText);
                    }
                }).catch((e) => {
                    Util.error(e);
                });
            }
            catch (e) {
                Util.error(e);
            }
            console.debug('form end');
            return false;
        };
    }
    formPopulate(form) {
        let hasil = {};
        let input = form.querySelectorAll('input');
        let textArea = form.querySelectorAll('textarea');
        let select = form.querySelectorAll('select');
        input.forEach((item) => {
            let value = '';
            if (item.hasAttribute(Param.HA_MD5)) {
                value = md5(item.value);
            }
            else if (item.hasAttribute(Param.HA_TINYMCE)) {
                value = tinyMCE.editors[0].getContent();
                console.debug('tinymce get content:');
                console.debug(tinyMCE.editors[0].getContent());
            }
            else if (item.getAttribute("type") == "radio") {
                value = form[item.name].value;
            }
            else {
                value = item.value;
            }
            hasil[item.name] = value;
        });
        textArea.forEach((item) => {
            if (item.hasAttribute(Param.HA_TINYMCE)) {
                hasil[item.name] = tinyMCE.editors[0].getContent();
            }
            else {
                hasil[item.name] = item.value;
            }
        });
        select.forEach((item) => {
            hasil[item.name] = item.value;
        });
        console.log('hasil:');
        console.log(hasil);
        return hasil;
    }
    ajaxKlik(el) {
        if (el.hasAttribute(Param.HA_POST)) {
            Util.Ajax('post', el.getAttribute(Param.HA_POST), '', null).then((xml) => {
                console.debug('post selesai');
                if (xml.status >= 200 && xml.status < 300) {
                    console.debug('status ' + xml.status);
                    console.debug('reload ' + el.hasAttribute(Param.HA_RELOAD));
                    if (el.hasAttribute(Param.HA_RELOAD)) {
                        window.location.reload();
                    }
                    else if (el.hasAttribute(Param.HA_DLG)) {
                        dialog.tampil(el.getAttribute(Param.HA_DLG));
                        dialog.okTbl.onclick = () => {
                            if (el.hasAttribute(Param.HA_RELOAD)) {
                                window.location.reload();
                            }
                            else if (el.hasAttribute(Param.HA_URL)) {
                                window.location.href = el.getAttribute(Param.HA_URL);
                            }
                        };
                    }
                    else if (el.hasAttribute(Param.HA_URL)) {
                        window.location.href = el.getAttribute(Param.HA_URL);
                    }
                }
                else {
                    dialog.tampil(xml.responseText);
                }
            }).catch((e) => {
                Util.error(e);
            });
        }
        else if (el.hasAttribute(Param.HA_GET)) {
            window.location.href = el.getAttribute(Param.HA_GET);
        }
        else {
            console.error(el);
            throw Error('method tidak definisikan post/get');
        }
    }
    klik() {
        let el = document.body.querySelectorAll(`[${Param.HA_KLIK}]`);
        console.log('klik element:');
        console.log(el);
        el.forEach((el2) => {
            el2.onclick = (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (el2.hasAttribute(Param.HA_KF)) {
                    let ok = confirm(el2.getAttribute(Param.HA_KF));
                    if (ok) {
                        this.ajaxKlik(el2);
                    }
                }
                else if (el2.hasAttribute(Param.HA_DLG)) {
                    dialog.tampil(el2.getAttribute(Param.HA_DLG));
                    dialog.okTbl.onclick = () => {
                        this.ajaxKlik(el2);
                    };
                }
                else if (el2.hasAttribute(Param.HA_TOGGLE)) {
                    let sel = el2.getAttribute(Param.HA_TOGGLE);
                    let el3 = document.body.querySelector(sel);
                    el3.classList.toggle('disp-none');
                    el3.classList.toggle('disp-block');
                }
                else {
                    this.ajaxKlik(el2);
                }
            };
        });
    }
    tiny() {
        let el = document.body.querySelectorAll(`textarea[${Param.HA_TINYMCE}]`);
        let el2 = el[0];
        console.log(el);
        console.log(el2);
        if (!el2)
            return;
        console.debug('tiny mce init');
        console.debug(tinyMCE.init);
        tinyMCE.init({
            setup: (ed) => {
                ed.on('init', (_args) => {
                    console.debug('tinymce on loaded');
                });
            },
            selector: `textarea[${Param.HA_TINYMCE}]`
        });
    }
}
var umum = new Umum();
umum.klik();
umum.tiny();
