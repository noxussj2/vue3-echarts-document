/**
 * 自动化部署
 */
;(async () => {
    const gulp = require('gulp')
    const sftp = require('gulp-sftp-up4')

    const sftpConfig = {
        host: '59.38.45.123', // 服务器地址
        user: 'root', // 帐号
        pass: 'abc998800440', // 密码
        port: 22, // 端口
        remotePath: '/opt/1panel/apps/openresty/openresty/www/sites/v3-echarts/index'
    }

    // 更新web目录
    gulp.task('upload', function () {
        return gulp.src('dist/**').pipe(sftp(sftpConfig))
    })
})()
