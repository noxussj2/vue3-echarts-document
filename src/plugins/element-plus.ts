import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-input.css'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-dialog.css'
import 'element-plus/theme-chalk/el-overlay.css'
import 'element-plus/theme-chalk/el-radio-group.css'
import 'element-plus/theme-chalk/el-radio.css'
import 'element-plus/theme-chalk/el-drawer.css'
import 'element-plus/theme-chalk/el-select.css'
import 'element-plus/theme-chalk/el-option.css'
import 'element-plus/theme-chalk/el-form.css'
import 'element-plus/theme-chalk/el-form-item.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-image-viewer.css'
import 'element-plus/theme-chalk/el-carousel.css'
import 'element-plus/theme-chalk/el-carousel-item.css'
import 'element-plus/theme-chalk/el-cascader.css'
import 'element-plus/theme-chalk/el-cascader-panel.css'
import 'element-plus/theme-chalk/el-checkbox.css'
import 'element-plus/theme-chalk/el-checkbox-group.css'
import 'element-plus/theme-chalk/el-date-picker.css'
import 'element-plus/theme-chalk/el-row.css'
import 'element-plus/theme-chalk/el-col.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-switch.css'
import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-table-column.css'
import 'element-plus/theme-chalk/el-tabs.css'
import 'element-plus/theme-chalk/el-upload.css'
import 'element-plus/theme-chalk/el-icon.css'
import 'element-plus/theme-chalk/el-loading.css'

import {
    ElInput,
    ElButton,
    ElDialog,
    ElRadioGroup,
    ElRadio,
    ElDrawer,
    ElForm,
    ElFormItem,
    ElSelect,
    ElOption,
    ElImage,
    ElCarousel,
    ElCarouselItem,
    ElCascader,
    ElCheckbox,
    ElCheckboxGroup,
    ElDatePicker,
    ElRow,
    ElCol,
    ElSwitch,
    ElTable,
    ElTableColumn,
    ElTabs,
    ElTabPane,
    ElUpload,
    ElIcon
} from 'element-plus'

/**
 * 注册饿了么组件
 */
export default (app: any) => {
    if (typeof window !== 'undefined') {
        app.component('ElInput', ElInput)
        app.component('ElButton', ElButton)
        app.component('ElDialog', ElDialog)
        app.component('ElRadioGroup', ElRadioGroup)
        app.component('ElRadio', ElRadio)
        app.component('ElDrawer', ElDrawer)
        app.component('ElForm', ElForm)
        app.component('ElFormItem', ElFormItem)
        app.component('ElSelect', ElSelect)
        app.component('ElOption', ElOption)
        app.component('ElImage', ElImage)
        app.component('ElCarousel', ElCarousel)
        app.component('ElCarouselItem', ElCarouselItem)
        app.component('ElCascader', ElCascader)
        app.component('ElCheckbox', ElCheckbox)
        app.component('ElCheckboxGroup', ElCheckboxGroup)
        app.component('ElDatePicker', ElDatePicker)
        app.component('ElRow', ElRow)
        app.component('ElCol', ElCol)
        app.component('ElSwitch', ElSwitch)
        app.component('ElTable', ElTable)
        app.component('ElTableColumn', ElTableColumn)
        app.component('ElTabs', ElTabs)
        app.component('ElTabPane', ElTabPane)
        app.component('ElUpload', ElUpload)
        app.component('ElIcon', ElIcon)
    }
}
