import React from 'react';
import { List } from '../../components';
import PageHeaderLayout from "../../layouts/PageHeaderLayout";

const divStyle = {
  width: '90%',
  overflow: 'hidden',
};

export default () => (
  <PageHeaderLayout title="Productlist information" style={divStyle}>
    <List
      actions={['create', 'update', 'delete']}
      model={'Productlist'}
      name={'Productlist'}
    />
  </PageHeaderLayout>
);
