import app from "./app";

/* components */
import MainLayout from '@/layout/MainLayout/MainLayout.vue';
import Skeleton from '@/components/shared/SkeletonLoading/Skeleton.vue';
import DetailItem from '@/components/shared/Modals/DetailItem/DetailItem.vue';
import Toast from '@/components/shared/Toast/Toast.vue';
import SpinnerLoading from '@/components/Loaders/SpinnerLoading/SpinnerLoading.vue';


/* components */
app.component('skeleton', Skeleton);
app.component('main-layout', MainLayout);
app.component('detail-item', DetailItem);
app.component('toast', Toast);
app.component('spinner-loading', SpinnerLoading);


