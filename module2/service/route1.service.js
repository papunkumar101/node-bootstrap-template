class ModuleService{

    async heyHello(req, res, next) {
        try {
            return res.send("success");
        } catch (error) {
            return res.send("failed",error);

        }

    }

}
export default new ModuleService();
