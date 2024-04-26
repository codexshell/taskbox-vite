import type { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

//@ts-ignore
import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";
//@ts-ignore
import { withNgxsLoggerPlugin } from "@ngxs/logger-plugin";
import { provideStore } from "@ngxs/store";

import { routes } from "./app.routes";
import { TaskState } from "./state/task.state";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideStore(
			[TaskState],
			withNgxsReduxDevtoolsPlugin(),
			withNgxsLoggerPlugin(),
		),
	],
};
