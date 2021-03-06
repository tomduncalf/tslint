/*
 * Copyright 2013 Palantir Technologies, Inc.
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

import {TestUtils} from "./lint";

describe("<eofline>", () => {
    const EofLineRule = TestUtils.getRule("eofline");
    const fileName = "eofline.test.ts";
    const failureString = EofLineRule.FAILURE_STRING;

    it("ensures a trailing newline at EOF", () => {
        const actualFailures = TestUtils.applyRuleOnFile(fileName, EofLineRule);
        const expectedFailure = TestUtils.createFailure(fileName, [4, 38], [4, 38], failureString);

        assert.equal(actualFailures.length, 1);
        assert.isTrue(actualFailures[0].equals(expectedFailure));
    });
});
