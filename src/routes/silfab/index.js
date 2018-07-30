/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Silfab from './Silfab';
import Layout from '../../components/Layout';

const title = 'Silfab';

function action() {
  return {
    chunks: ['silfab'],
    title,
    component: (
      <Layout>
        <Silfab title={title} />
      </Layout>
    ),
  };
}

export default action;
