import Mock from 'mockjs'
import {
    RequestAsyncExample
} from './request'

Mock.mock(
    RequestAsyncExample.url
    , RequestAsyncExample.type
    , [{
        'name': '@name'
        , 'age|1-100': 100
    }]
)
