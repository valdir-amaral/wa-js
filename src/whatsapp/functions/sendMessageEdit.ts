/*!
 * Copyright 2022 WPPConnect Team
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

import { LinkPreviewOptions } from '../../chat';
import { exportModule } from '../exportModule';
import { Wid } from '../misc/Wid';
import { MsgModel } from '../models';

/** @whatsapp 262489
 */
export declare function sendMessageEdit(
  msg: MsgModel,
  text: string,
  options: {
    linkPreview: LinkPreviewOptions | null;
    mentionedJidList: Wid[] | [];
  }
): Promise<any>;

exportModule(
  exports,
  {
    sendMessageEdit: 'sendMessageEdit',
  },
  (m) => m.sendMessageEdit
);