import axios from 'axios'
import { def } from '../../node_modules/@vue/shared';

export default axios.create({
    baseURL: 'http://localhost:3333'
})