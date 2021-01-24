const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题1',
            createTime: 1611468881974,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题2',
            createTime: 1611468902170,
            author: 'lisi'
        }
    ]
}

const getDetail = id => {
    return {
        id: 1,
        title: '标题1',
        createTime: 1611468881974,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    console.log('newBlog', blogData)
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('updateBlog', blogData)
    return true
}

const delBlog = id => {
    console.log('delBlog', id)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}
