export interface IModalComponent {
    openModal: boolean;
    handleModal: (status: boolean) => void;
    children: React.ReactNode;
}