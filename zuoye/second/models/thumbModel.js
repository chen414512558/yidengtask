
class ThumbModel {
    constructor(db) {
        this.db = db;
        this.id = 1;
    }

    async addNum() {
        let num = await this.selectNum();
        let mysql = '';
        num++;
        if (num > 10) {
            mysql = `update thumb set num=0 WHERE id=${this.id}`;
            num = 0;
        } else {
            mysql = `update thumb set num=${num} WHERE id=${this.id}`;
        }
        try {
            return this.db.query(mysql).then((data)=>{
                if (data.affectedRows) {
                    return num;
                } else {
                    return -1;
                }
            }).catch((err)=>{
                throw err;
            });
        } catch(e) {
            console.log(e);
            throw new Error('操作数据库出错');
        }
    }

    async selectNum() {
        return this.db.query(`select * from thumb where id=${this.id}`)
            .then((rows)=>{
                return rows[0].num;
            })
            .catch((err)=>{
                throw err;
            });
    }

}

module.exports = function (db) {
    return new ThumbModel(db);
}