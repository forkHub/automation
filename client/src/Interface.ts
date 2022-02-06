interface IStep {
    aksi: string,
    url: string,
    elmType: string,
    desc?: string,

    xpath?: string,
    text?: string,
    label?: string,
    hint?: string
}