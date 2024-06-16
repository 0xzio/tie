export enum EventType {
  Render = 'Render',

  RenderList = 'RenderList',
  RenderMarkdown = 'RenderMarkdown',
  Loading = 'Loading.',

  RunAppleScript = 'RunAppleScript',
  RunAppleScriptResult = 'RunAppleScriptResult',

  InitOnSearchChange = 'InitOnSearchChange',
  OnSearchChange = 'OnSearchChange',

  InitOnFilterChange = 'InitOnFilterChange',
  OnFilterChange = 'OnFilterChange',

  HttpRequestInited = 'HttpRequestInited',
  HttpRequestResult = 'HttpRequestResult',
  HttpRawFetch = 'HttpRawFetch',
  HttpFetchCancel = 'HttpFetchCancel',
  HttpFetchSend = 'HttpFetchSend',
  HttpFetchReadBody = 'HttpFetchReadBody',

  // Clipboard
  ClipboardHasText = 'ClipboardHasText',
  ClipboardHasTextResult = 'ClipboardHasTextResult',
  ClipboardHasImage = 'ClipboardHasImage',
  ClipboardHasImageResult = 'ClipboardHasImageResult',
  ClipboardHasHtml = 'ClipboardHasHtml',
  ClipboardHasHtmlResult = 'ClipboardHasHtmlResult',
  ClipboardHasRtf = 'ClipboardHasRtf',
  ClipboardHasRtfResult = 'ClipboardHasRtfResult',
  ClipboardHasFiles = 'ClipboardHasFiles',
  ClipboardHasFilesResult = 'ClipboardHasFilesResult',
  ClipboardWriteText = 'ClipboardWriteText',
  ClipboardWriteTextResult = 'ClipboardWriteTextResult',
  ClipboardWriteHtml = 'ClipboardWriteHtml',
  ClipboardWriteHtmlResult = 'ClipboardWriteHtmlResult',
  ClipboardWriteHtmlAndText = 'ClipboardWriteHtmlAndText',
  ClipboardWriteHtmlAndTextResult = 'ClipboardWriteHtmlAndTextResult',
  ClipboardWriteRtf = 'ClipboardWriteRtf',
  ClipboardWriteRtfResult = 'ClipboardWriteRtfResult',
  ClipboardWriteFilesUris = 'ClipboardWriteFilesUris',
  ClipboardWriteFilesUrisResult = 'ClipboardWriteFilesUrisResult',
  ClipboardWriteFiles = 'ClipboardWriteFiles',
  ClipboardWriteFilesResult = 'ClipboardWriteFilesResult',
  ClipboardClear = 'ClipboardClear',
  ClipboardClearResult = 'ClipboardClearResult',
  ClipboardReadText = 'ClipboardReadText',
  ClipboardReadTextResult = 'ClipboardReadTextResult',
  ClipboardReadHtml = 'ClipboardReadHtml',
  ClipboardReadHtmlResult = 'ClipboardReadHtmlResult',
  ClipboardReadRtf = 'ClipboardReadRtf',
  ClipboardReadRtfResult = 'ClipboardReadRtfResult',
  ClipboardReadFiles = 'ClipboardReadFiles',
  ClipboardReadFilesResult = 'ClipboardReadFilesResult',
  ClipboardReadFilesUris = 'ClipboardReadFilesUris',
  ClipboardReadFilesUrisResult = 'ClipboardReadFilesUrisResult',
  ClipboardReadImageBinary = 'ClipboardReadImageBinary',
  ClipboardReadImageBinaryResult = 'ClipboardReadImageBinaryResult',
  ClipboardReadImageBase64 = 'ClipboardReadImageBase64',
  ClipboardReadImageBase64Result = 'ClipboardReadImageBase64Result',
  ClipboardWriteImageBinary = 'ClipboardWriteImageBinary',
  ClipboardWriteImageBinaryResult = 'ClipboardWriteImageBinaryResult',
  ClipboardWriteImageBase64 = 'ClipboardWriteImageBase64',
  ClipboardWriteImageBase64Result = 'ClipboardWriteImageBase64Result',
}
