
export const generateVCard = () => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Madhankumar. C',
    'N:C;Madhankumar;;;',
    'ORG:Erode Scales',
    'TITLE:Managing Director',
    'TEL;TYPE=CELL:+918122500800',
    'EMAIL:erodescaales@gmail.com',
    'ADR;TYPE=WORK:;;39, New masjid street, S.k.building;Erode;;638003;India',
    'ADR;TYPE=WORK:;;49, Near Gowri Theater, New Pallipalayam road;Kumarapalayam;;638813;India',
    'URL:https://www.instagram.com/erode_scales',
    'URL:https://www.facebook.com/erode.scaales',
    'NOTE:Precision Weighing Solutions - Trust • Excellence • Innovation',
    'END:VCARD'
  ].join('\r\n');
  
  return vcard;
};
