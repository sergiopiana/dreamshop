/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Busqueda from './Busqueda';
import Layout from '../../components/Layout';

const title = 'Busqueda';

function action() {
  return {
    chunks: ['busqueda'],
    title,
    component: (
      <Layout>
        <Busqueda title={title} />
      </Layout>
    ),
  };
}

export default action;
