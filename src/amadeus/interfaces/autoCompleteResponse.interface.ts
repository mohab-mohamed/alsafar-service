import { AutoCompleteData } from './autoCompleteData.interface';

export class AutoCompleteResponse {
  data: {
    meta: { count: 4; links: [any] };
    data: [AutoCompleteData];
  };
}
