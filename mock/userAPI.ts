//@ts-nocheck
import Mock from 'mockjs';

const data = Mock.mock({
  'userList|100': [
    {
      id: '@increment',
      name: '@cname',
      address: '@city(true)',
      date: "@date('yyyy-MM-dd')",
    },
  ],
});
const filterData = (data, userId, name = '') => {
  if (userId) {
    return data.filter((item) => item.id === userId);
  }
  if (name) {
    return data.filter((item) => item.name === name);
  }
  return data;
};
const deleteData = (data, userId) => {
  return data.filter((item) => item.id !== userId);
};
export default {
  'GET /api/userList': (req: any, res: any) => {
    const { userList } = data;
    const list = filterData(userList, req.query.userId, req.query.name);
    setTimeout(() => {
      res.status(200).json({
        success: true,
        data: { userList: list },
        errorCode: 0,
      });
    }, 1000);
  },
  'DELETE /api/user': (req: any, res: any) => {
    const { userList } = data;
    data.userList = deleteData(userList, req.body.userId);
    res.status(200).json({ success: true });
  },
  'POST /api/user': (req: any, res: any) => {
    const newItem = Mock.mock({
      id: '@increment',
      name: req.body.name,
      address: req.body.address,
      date: req.body.date,
    });
    data.userList.unshift(newItem);

    res.status(200).json({ success: true, data: newItem });
  },
  'PUT /api/user': (req: any, res: any) => {
    const { id } = req.query;
    const { name, address, date } = req.body;
    data.userList.map((item) => {
      if (item.id === Number(id)) {
        item.name = name;
        item.address = address;
        item.date = date;
      }
      return item;
    });

    res.status(200).json({ success: true, data: { list: data.userList } });
  },
};
