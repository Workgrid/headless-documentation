/**
 * Copyright 2020 Workgrid Software
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  extends: ['react-app', 'plugin:import/errors', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['header'],
  rules: {
    'header/header': [
      'error',
      'block',
      [
        `*`,
        {
          pattern: ` * Copyright \\d{4} Workgrid Software`,
          template: ` * Copyright ${new Date().getFullYear()} Workgrid Software`,
        },
        ` *`,
        ` * Licensed under the Apache License, Version 2.0 (the "License");`,
        ` * you may not use this file except in compliance with the License.`,
        ` * You may obtain a copy of the License at`,
        ` *`,
        ` *     http://www.apache.org/licenses/LICENSE-2.0`,
        ` *`,
        ` * Unless required by applicable law or agreed to in writing, software`,
        ` * distributed under the License is distributed on an "AS IS" BASIS,`,
        ` * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.`,
        ` * See the License for the specific language governing permissions and`,
        ` * limitations under the License.`,
        ` `,
      ],
      2,
    ],
  },
}
