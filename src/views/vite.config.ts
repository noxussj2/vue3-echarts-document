import { url } from '../../config/api'
import * as path from 'path'

export default {
    server: {
        port: '12001',
        cors: true, // 默认启用并允许任何源
        proxy: {
            '/api': {
                target: url,
                changeOrigin: true,
                secure: false
            }
        }
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '../'),
            config: path.join(__dirname, '../../config')
        }
    }
}
