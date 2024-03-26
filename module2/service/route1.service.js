class ModuleService{

    async apiStatus(req, res, next) {
        try {
            return res.json({ code: 200, data: null, message: 'success', error: null });
        } catch (error) {
            return res.json({ code: 400, data: null, message: 'failed', error: err });

        }

    }

}
export default new ModuleService();
