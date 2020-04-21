/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { h, FunctionalComponent } from 'preact';

import LinkList from '../LinkList';

import config from 'consts:config';

interface Props {}

const HeaderLinkList: FunctionalComponent<Props> = () => {
  return (
    <LinkList
      links={[
        { title: 'Read more…', href: '/about/' },
        { title: 'FAQ', href: '/faqs/' },
        {
          title: 'Have an issue?',
          href: `${config.githubRepository}/issues/new`,
        },
      ]}
    />
  );
};

export default HeaderLinkList;
