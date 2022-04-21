import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
// https://ionic.io/ionicons for more options
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, chatboxOutline, chatboxEllipses } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Page 1',
    url: '/page/Page1',
    iosIcon: chatboxOutline,
    mdIcon: chatboxEllipses
  },
  {
    title: 'Page 2',
    url: '/page/Page2',
    iosIcon: chatboxOutline,
    mdIcon: chatboxEllipses
  },
  {
    title: 'Page 3',
    url: '/page/Page3',
    iosIcon: chatboxOutline,
    mdIcon: chatboxEllipses
  },
  {
    title: 'Page 4',
    url: '/page/Page4',
    iosIcon: chatboxOutline,
    mdIcon: chatboxEllipses
  },
  {
    title: 'Page 5',
    url: '/page/Page5',
    iosIcon: chatboxOutline,
    mdIcon: chatboxEllipses
  }
];

// From the template
// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Account</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        {/* from the template */}
        {/* <IonList id="labels-list"> 
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
